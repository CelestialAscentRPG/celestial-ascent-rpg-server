import { Test, TestingModule } from '@nestjs/testing';
import { GameItemsController } from './game-items.controller';
import { GameItemsService } from './game-items.service';

describe('GameItemsController', () => {
  let controller: GameItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameItemsController],
      providers: [GameItemsService],
    }).compile();

    controller = module.get<GameItemsController>(GameItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
