import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'This is the current cat';
  }

  @Post()
  async signUp(@Body() body: CatsRequestDto) {
    return this.catsService.signUp(body);
  }

  @Post('login')
  logIn() {
    return 'log in';
  }

  @Post('logout')
  logOut() {
    return 'log out';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'upload cat';
  }
}
