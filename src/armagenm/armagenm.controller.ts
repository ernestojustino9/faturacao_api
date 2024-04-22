import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmagenmService } from './armagenm.service';
import { CreateArmagenmDto } from './dto/create-armagenm.dto';
import { UpdateArmagenmDto } from './dto/update-armagenm.dto';

@Controller('armagenm')
export class ArmagenmController {
  constructor(private readonly armagenmService: ArmagenmService) {}

  @Post()
  create(@Body() createArmagenmDto: CreateArmagenmDto) {
    return this.armagenmService.create(createArmagenmDto);
  }

  @Get()
  findAll() {
    return this.armagenmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armagenmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmagenmDto: UpdateArmagenmDto) {
    return this.armagenmService.update(+id, updateArmagenmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armagenmService.remove(+id);
  }
}
