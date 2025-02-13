import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return '모든 댓글을 조회합니다.';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return '댓글을 생성합니다.';
  }

  async plusLike(id: string) {
    return '좋아요를 올립니다.';
  }
}
