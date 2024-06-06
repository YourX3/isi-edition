import { AuthorDto } from "./author.dto";

export interface BookDto {
  id: number;
  title: string;
  summary: string;
  imageSrc: string;
  author: AuthorDto;
}

export class Book {
  id?: number;
  title: string;
  summary: string;
  imageSrc?: string;
  author?: AuthorDto;

  constructor(dto: BookDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.summary = dto.summary;
    this.imageSrc = dto.imageSrc;
    this.author = dto.author;
  }
}

export interface CreateBookDto {
  id?: number;
  title: string;
  summary: string;
  imageSrc?: string;
  authorId: number;
}