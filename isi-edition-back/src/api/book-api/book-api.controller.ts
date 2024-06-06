import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { BookApiService } from './book-api.service';
import { Book } from '../../model/book/book.entity';
import { CreateBookDto } from '../../dto/create-book.dto';

@Controller('books')
export class BookApiController {
  constructor(private readonly bookApiService: BookApiService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookApiService.getAllBooks();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookApiService.createBook(createBookDto);
  }

  @Put()
  updateAuthor(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookApiService.updateBook(createBookDto);
  }

  @Delete(':id')
  deleteAuthor(@Param('id') id: number): Promise<void> {
    return this.bookApiService.deleteBook(id);
  }
}
