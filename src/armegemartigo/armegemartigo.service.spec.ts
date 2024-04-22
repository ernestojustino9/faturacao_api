import { Test, TestingModule } from '@nestjs/testing';
import { ArmegemartigoService } from './armegemartigo.service';

describe('ArmegemartigoService', () => {
  let service: ArmegemartigoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmegemartigoService],
    }).compile();

    service = module.get<ArmegemartigoService>(ArmegemartigoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
