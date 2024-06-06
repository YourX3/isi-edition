import { ContractDto } from "./contract.dto";

export class EditorDto {
  id: number = 0;
  name: string = '';
  imageSrc: string = '';
  contracts: ContractDto[] = [];
}