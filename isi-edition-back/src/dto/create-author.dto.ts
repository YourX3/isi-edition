import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @Optional()
  id?: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @Optional()
  imageSrc?: string;
}