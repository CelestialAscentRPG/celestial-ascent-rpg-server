import { Test, TestingModule } from '@nestjs/testing';
import { PlayerBackpackService } from './player-backpack.service';

describe('PlayerBackpackService', () => {
  let service: PlayerBackpackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerBackpackService],
    }).compile();

    service = module.get<PlayerBackpackService>(PlayerBackpackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
