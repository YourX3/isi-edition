import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAuthorDto } from '../../dto/create-author.dto';
import { AuthorApiService } from './author-api.service';
import { Author } from '../../model/author/author.entity';

@Controller('authors')
export class AuthorApiController {
  constructor(private readonly authorApiService: AuthorApiService) {}

  @Get()
  getAllAuthors(): Promise<Author[]> {
    return this.authorApiService.getAllAuthors();
  }

  @Post()
  createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorApiService.createAuthor(createAuthorDto);
  }

  @Put()
  updateAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorApiService.updateAuthor(createAuthorDto);
  }

  @Delete(':id')
  deleteAuthor(@Param('id') id: number): Promise<void> {
    return this.authorApiService.deleteAuthor(id);
  }
}
