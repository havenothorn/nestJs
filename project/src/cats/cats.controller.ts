import {
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

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return { cats: 'All cats' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param) {
    return 'One cat';
  }

  @Post()
  createCat() {
    return 'Create cat';
  }

  @Put(':id')
  updateCat() {
    return 'Update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'Update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'Delete cat';
  }
}
