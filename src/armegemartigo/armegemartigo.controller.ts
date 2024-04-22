import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmegemartigoService } from './armegemartigo.service';
import { CreateArmegemartigoDto } from './dto/create-armegemartigo.dto';
import { UpdateArmegemartigoDto } from './dto/update-armegemartigo.dto';

@Controller('armegemartigo')
export class ArmegemartigoController {
  constructor(private readonly armegemartigoService: ArmegemartigoService) {}

  @Post()
  create(@Body() createArmegemartigoDto: CreateArmegemartigoDto) {
    return this.armegemartigoService.create(createArmegemartigoDto);
  }

  @Get()
  findAll() {
    return this.armegemartigoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armegemartigoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmegemartigoDto: UpdateArmegemartigoDto) {
    return this.armegemartigoService.update(+id, updateArmegemartigoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armegemartigoService.remove(+id);
  }
}
