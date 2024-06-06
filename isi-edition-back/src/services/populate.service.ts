import { Injectable } from "@nestjs/common";
import { AuthorService } from "../model/author/author.service";
import { BookService } from "../model/book/book.service";

@Injectable()
export class PopulateService {
  public constructor(private readonly authorService: AuthorService, private readonly bookService: BookService) { }

  public async populate() {
    await this.authorService.populate();
    await this.bookService.populate();
  }
}