import { Test, TestingModule } from '@nestjs/testing';
import { ArenaLogService } from './arena-log.service';

describe('ArenaLogService', () => {
  let service: ArenaLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArenaLogService],
    }).compile();

    service = module.get<ArenaLogService>(ArenaLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
