import { Contract, ContractDto } from "./contract.dto";

export interface AuthorDto {
  id: number;
  firstName: string;
  lastName: string;
  imageSrc: string;
  contracts: ContractDto[];
}

export class Author {
  id?: number;
  firstName: string;
  lastName: string;
  imageSrc: string;
  contracts: Contract[];

  constructor(dto: AuthorDto) {
    this.id = dto.id;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.imageSrc = dto.imageSrc;
    this.contracts = dto.contracts;
  }
}

export interface CreateAuthorDto {
  id?: number;
  firstName: string;
  lastName: string;
  imageSrc?: string;
}