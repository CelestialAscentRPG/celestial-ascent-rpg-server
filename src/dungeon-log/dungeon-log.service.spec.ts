import { Test, TestingModule } from '@nestjs/testing';
import { DungeonLogService } from './dungeon-log.service';

describe('DungeonLogService', () => {
  let service: DungeonLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DungeonLogService],
    }).compile();

    service = module.get<DungeonLogService>(DungeonLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
