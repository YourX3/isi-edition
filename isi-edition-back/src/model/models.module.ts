import { Global, Module } from "@nestjs/common";
import { AuthorService } from "./author/author.service";
import { BookService } from "./book/book.service";
import { ContactService } from "./contact/contact.service";
import { ContractService } from "./contract/contract.service";
import { EditorService } from "./editor/editor.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./author/author.entity";
import { Book } from "./book/book.entity";
import { Contact } from "./contact/contact.entity";
import { Contract } from "./contract/contract.entity";
import { Editor } from "./editor/editor.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Author]), TypeOrmModule.forFeature([Book]), TypeOrmModule.forFeature([Contact]),
    TypeOrmModule.forFeature([Contract]), TypeOrmModule.forFeature([Editor])],
  providers: [AuthorService, BookService, ContactService, ContractService, EditorService],
  exports: [AuthorService, BookService, ContactService, ContractService, EditorService]
})
export class ModelsModule {}
