import { Injectable } from '@nestjs/common';
import { CreateArmagenmDto } from './dto/create-armagenm.dto';
import { UpdateArmagenmDto } from './dto/update-armagenm.dto';

@Injectable()
export class ArmagenmService {
  create(createArmagenmDto: CreateArmagenmDto) {
    return 'This action adds a new armagenm';
  }

  findAll() {
    return `This action returns all armagenm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} armagenm`;
  }

  update(id: number, updateArmagenmDto: UpdateArmagenmDto) {
    return `This action updates a #${id} armagenm`;
  }

  remove(id: number) {
    return `This action removes a #${id} armagenm`;
  }
}
