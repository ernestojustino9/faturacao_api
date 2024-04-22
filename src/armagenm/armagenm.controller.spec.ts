import { Test, TestingModule } from '@nestjs/testing';
import { ArmagenmController } from './armagenm.controller';
import { ArmagenmService } from './armagenm.service';

describe('ArmagenmController', () => {
  let controller: ArmagenmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmagenmController],
      providers: [ArmagenmService],
    }).compile();

    controller = module.get<ArmagenmController>(ArmagenmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
