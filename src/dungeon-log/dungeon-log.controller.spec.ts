import { Test, TestingModule } from '@nestjs/testing';
import { DungeonLogController } from './dungeon-log.controller';
import { DungeonLogService } from './dungeon-log.service';

describe('DungeonLogController', () => {
  let controller: DungeonLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DungeonLogController],
      providers: [DungeonLogService],
    }).compile();

    controller = module.get<DungeonLogController>(DungeonLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
