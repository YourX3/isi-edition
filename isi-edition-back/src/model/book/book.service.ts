import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from '../../dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['author'] });
  }

  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  async create(book: CreateBookDto): Promise<Book> {
    return this.bookRepository.save({...book, author: {id: book.authorId}});
  }

  async update(book: CreateBookDto): Promise<Book> {
    return this.bookRepository.save({...book, author: {id: book.authorId}});
  }

  async populate(): Promise<void> {
    await this.create({ title: 'Harry Potter and the Philosopher\'s Stone', summary: 'The book that started it all', authorId: 1 });
    await this.create({ title: 'The Shining', summary: 'Here\'s Johnny!', authorId: 2 });
    await this.create({ title: 'A Game of Thrones', summary: 'Winter is coming', authorId: 3 });
    await this.create({ title: 'The Fellowship of the Ring', summary: 'One ring to rule them all', authorId: 4 });
    await this.create({ title: 'And Then There Were None', summary: 'Ten little soldiers', authorId: 5 });
    await this.create({ title: 'The Da Vinci Code', summary: 'The truth is out there', authorId: 6 });
    await this.create({ title: 'The Alchemist', summary: 'Follow your dreams', authorId: 7 });
    await this.create({ title: 'Harry Potter and the Chamber of Secrets', summary: 'The plot thickens', authorId: 1 });
    await this.create({ title: 'Harry Potter and the Prisoner of Azkaban', summary: 'The plot thickens even more', authorId: 1 });
    console.log('Books populated');
  }
}