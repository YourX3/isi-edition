import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {
  @Optional()
  id?: number;
  
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  summary: string;

  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @Optional()
  imageSrc?: string;
}