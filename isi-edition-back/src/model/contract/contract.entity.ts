import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Editor } from '../editor/editor.entity';
import { Author } from '../author/author.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Editor, editor => editor.contracts)
  editor: Editor;

  @ManyToOne(() => Author, author => author.contracts)
  author: Author;
}