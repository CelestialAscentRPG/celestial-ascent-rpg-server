import { Test, TestingModule } from '@nestjs/testing';
import { PlayerInfoController } from './player-info.controller';
import { PlayerInfoService } from './player-info.service';

describe('PlayerInfoController', () => {
  let controller: PlayerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerInfoController],
      providers: [PlayerInfoService],
    }).compile();

    controller = module.get<PlayerInfoController>(PlayerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
