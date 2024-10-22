import { Test, TestingModule } from '@nestjs/testing';
import { ArenaInfoService } from './arena-info.service';

describe('ArenaInfoService', () => {
  let service: ArenaInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArenaInfoService],
    }).compile();

    service = module.get<ArenaInfoService>(ArenaInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
