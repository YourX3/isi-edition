import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from '../../dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author | null> {
    return this.authorRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }

  async create(author: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.save(author);
  }

  async update(author: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.save(author);
  }
  
  async populate(): Promise<void> {
    await this.create({ firstName: 'J.K.', lastName: 'Rowling' });
    await this.create({ firstName: 'Stephen', lastName: 'King' });
    await this.create({ firstName: 'George R.R.', lastName: 'Martin' });
    await this.create({ firstName: 'J.R.R.', lastName: 'Tolkien' });
    await this.create({ firstName: 'Agatha', lastName: 'Christie' });
    await this.create({ firstName: 'Dan', lastName: 'Brown' });
    await this.create({ firstName: 'Paulo', lastName: 'Coelho' });
    console.log('Authors populated');
  }
}