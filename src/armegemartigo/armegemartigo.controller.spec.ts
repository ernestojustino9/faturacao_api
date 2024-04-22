import { Test, TestingModule } from '@nestjs/testing';
import { ArmegemartigoController } from './armegemartigo.controller';
import { ArmegemartigoService } from './armegemartigo.service';

describe('ArmegemartigoController', () => {
  let controller: ArmegemartigoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmegemartigoController],
      providers: [ArmegemartigoService],
    }).compile();

    controller = module.get<ArmegemartigoController>(ArmegemartigoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
