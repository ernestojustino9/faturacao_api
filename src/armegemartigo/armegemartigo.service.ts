import { Injectable } from '@nestjs/common';
import { CreateArmegemartigoDto } from './dto/create-armegemartigo.dto';
import { UpdateArmegemartigoDto } from './dto/update-armegemartigo.dto';

@Injectable()
export class ArmegemartigoService {
  create(createArmegemartigoDto: CreateArmegemartigoDto) {
    return 'This action adds a new armegemartigo';
  }

  findAll() {
    return `This action returns all armegemartigo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} armegemartigo`;
  }

  update(id: number, updateArmegemartigoDto: UpdateArmegemartigoDto) {
    return `This action updates a #${id} armegemartigo`;
  }

  remove(id: number) {
    return `This action removes a #${id} armegemartigo`;
  }
}
