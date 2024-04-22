import { Module } from '@nestjs/common';
import { ArmegemartigoService } from './armegemartigo.service';
import { ArmegemartigoController } from './armegemartigo.controller';

@Module({
  controllers: [ArmegemartigoController],
  providers: [ArmegemartigoService],
})
export class ArmegemartigoModule {}
