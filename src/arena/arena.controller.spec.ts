import { Test, TestingModule } from '@nestjs/testing';
import { ArenaController } from './arena.controller';
import { ArenaService } from './arena.service';

describe('ArenaController', () => {
  let controller: ArenaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArenaController],
      providers: [ArenaService],
    }).compile();

    controller = module.get<ArenaController>(ArenaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
