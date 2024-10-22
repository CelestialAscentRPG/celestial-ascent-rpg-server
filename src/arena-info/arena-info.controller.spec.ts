import { Test, TestingModule } from '@nestjs/testing';
import { ArenaInfoController } from './arena-info.controller';
import { ArenaInfoService } from './arena-info.service';

describe('ArenaInfoController', () => {
  let controller: ArenaInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArenaInfoController],
      providers: [ArenaInfoService],
    }).compile();

    controller = module.get<ArenaInfoController>(ArenaInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
