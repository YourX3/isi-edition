import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editor } from './editor.entity';

@Injectable()
export class EditorService {
  constructor(
    @InjectRepository(Editor)
    private editorRepository: Repository<Editor>,
  ) {}

  findAll(): Promise<Editor[]> {
    return this.editorRepository.find();
  }

  findOne(id: number): Promise<Editor | null> {
    return this.editorRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.editorRepository.delete(id);
  }
}