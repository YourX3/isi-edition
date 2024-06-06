import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Contract } from '../contract/contract.entity';

@Entity()
export class Editor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mailAddress: string;

  @Column()
  address: string;

  @Column({nullable: true})
  imageSrc?: string;

  @OneToMany(() => Contract, contract => contract.editor)
  contracts: Contract[];
}