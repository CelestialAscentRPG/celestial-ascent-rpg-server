import { Test, TestingModule } from '@nestjs/testing';
import { GameItemsService } from './game-items.service';

describe('GameItemsService', () => {
  let service: GameItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameItemsService],
    }).compile();

    service = module.get<GameItemsService>(GameItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
