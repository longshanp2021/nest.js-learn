import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
// 增
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }
// 查
  @Get()
  findAll() {
    return this.booksService.findAll();
  }
// 查一
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }
// 改
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }
// 删
  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.booksService.remove(id);
  }
}
