import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from "./entities/book.entity";


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ) { }
  // 增
  create(createBookDto: CreateBookDto) {
    return this.bookRepository.insert(createBookDto);
  }
  // 查
  findAll() {
    return this.bookRepository.find();
  }
  // 查一
  findOne(id: string) {
    return this.bookRepository.findOne(id);
  }
  // 改
  update(id: string, data: UpdateBookDto) {
    return this.bookRepository.update(id, data)

  }
  // 删
  remove(id: string) {
    return this.bookRepository.delete(id);
  }

}
