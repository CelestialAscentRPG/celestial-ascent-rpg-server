import { Test, TestingModule } from '@nestjs/testing';
import { DungeonController } from './dungeon.controller';
import { DungeonService } from './dungeon.service';

describe('DungeonController', () => {
  let controller: DungeonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DungeonController],
      providers: [DungeonService],
    }).compile();

    controller = module.get<DungeonController>(DungeonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
