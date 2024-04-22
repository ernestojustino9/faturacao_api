import { Test, TestingModule } from '@nestjs/testing';
import { ArmagenmService } from './armagenm.service';

describe('ArmagenmService', () => {
  let service: ArmagenmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmagenmService],
    }).compile();

    service = module.get<ArmagenmService>(ArmagenmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
