import { Module } from '@nestjs/common';
import { ArmagenmService } from './armagenm.service';
import { ArmagenmController } from './armagenm.controller';

@Module({
  controllers: [ArmagenmController],
  providers: [ArmagenmService],
})
export class ArmagenmModule {}
