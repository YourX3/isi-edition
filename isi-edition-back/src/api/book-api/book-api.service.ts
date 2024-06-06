import { Injectable } from '@nestjs/common';
import { Book } from '../../model/book/book.entity';
import { BookService } from '../../model/book/book.service';
import { CreateBookDto } from '../../dto/create-book.dto';

@Injectable()
export class BookApiService {
  constructor(private readonly bookService: BookService) {}

  getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  updateBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.update(createBookDto);
  }

  deleteBook(id: number): Promise<void> {
    return this.bookService.remove(id);
  }
}
