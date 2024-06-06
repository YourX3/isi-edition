import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../model/author/author.entity';
import { Book } from '../model/book/book.entity';
import { Contact } from '../model/contact/contact.entity';
import { Contract } from '../model/contract/contract.entity';
import { Editor } from '../model/editor/editor.entity';

export const DATABASE_CONFIG = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Nusbstp03!',
  database: 'isi_edition',
  entities: [Editor, Author, Contact, Contract, Book],
  synchronize: true,
});