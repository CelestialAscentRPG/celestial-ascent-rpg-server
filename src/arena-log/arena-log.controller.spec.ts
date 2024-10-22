import { Test, TestingModule } from '@nestjs/testing';
import { ArenaLogController } from './arena-log.controller';
import { ArenaLogService } from './arena-log.service';

describe('ArenaLogController', () => {
  let controller: ArenaLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArenaLogController],
      providers: [ArenaLogService],
    }).compile();

    controller = module.get<ArenaLogController>(ArenaLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
