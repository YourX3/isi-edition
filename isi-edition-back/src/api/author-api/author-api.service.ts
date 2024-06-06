import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../../dto/create-author.dto';
import { Author } from '../../model/author/author.entity';
import { AuthorService } from '../../model/author/author.service';

@Injectable()
export class AuthorApiService {
  constructor(private readonly authorService: AuthorService) {}

  getAllAuthors(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorService.create(createAuthorDto);
  }

  updateAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorService.update(createAuthorDto);
  }

  deleteAuthor(id: number): Promise<void> {
    return this.authorService.remove(id);
  }
}
