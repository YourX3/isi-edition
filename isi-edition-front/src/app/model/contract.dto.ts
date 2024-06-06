import { EditorDto } from "./editor.dto";

export interface ContractDto {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  editor?: EditorDto;
}

export class Contract { 
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  editor?: EditorDto;

  constructor(dto: ContractDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.startDate = dto.startDate;
    this.endDate = dto.endDate;
    this.editor = dto.editor;
  }
}