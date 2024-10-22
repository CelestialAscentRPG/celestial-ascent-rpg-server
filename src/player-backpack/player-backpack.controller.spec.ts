import { Test, TestingModule } from '@nestjs/testing';
import { PlayerBackpackController } from './player-backpack.controller';
import { PlayerBackpackService } from './player-backpack.service';

describe('PlayerBackpackController', () => {
  let controller: PlayerBackpackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerBackpackController],
      providers: [PlayerBackpackService],
    }).compile();

    controller = module.get<PlayerBackpackController>(PlayerBackpackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
