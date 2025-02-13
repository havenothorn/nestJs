import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dtos/comments.create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsRepository } from 'src/cats/cats.repository';
import { Comments } from '../comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly catsRepository: CatsRepository,
  ) {}
  async getAllComments() {
    try {
      const comments = await this.commentsModel.find();
      return comments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createComment(id: string, commentData: CommentsCreateDto) {
    try {
      const targetCat =
        await this.catsRepository.findCatByIdWithoutPassword(id);
      const { contents, author } = commentData;
      const validAuthor =
        await this.catsRepository.findCatByIdWithoutPassword(author); // 댓글 작성자 존재 여부 확인
      const newComment = await new this.commentsModel({
        author: validAuthor._id,
        contents,
        info: targetCat._id,
      });
      return await newComment.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async plusLike(id: string) {
    try {
      const comment = await this.commentsModel.findById(id);
      comment.likeCounts += 1;
      return await comment.save();
    } catch (error) {}
  }
}
