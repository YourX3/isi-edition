import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private contractRepository: Repository<Contract>,
  ) {}

  findAll(): Promise<Contract[]> {
    return this.contractRepository.find();
  }

  findOne(id: number): Promise<Contract | null> {
    return this.contractRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.contractRepository.delete(id);
  }
}