import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Contract } from '../contract/contract.entity';
import { Book } from '../book/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({nullable: true})
  imageSrc?: string;

  @OneToMany(() => Contract, contract => contract.editor)
  contracts: Contract[];

  @OneToMany(() => Book, book => book.author)
  books: Book[];
}