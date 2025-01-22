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
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    throw new HttpException('Forbidden', 403);
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param) {
    console.log(param);
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
