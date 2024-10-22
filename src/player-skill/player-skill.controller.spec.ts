import { Test, TestingModule } from '@nestjs/testing';
import { PlayerSkillController } from './player-skill.controller';
import { PlayerSkillService } from './player-skill.service';

describe('PlayerSkillController', () => {
  let controller: PlayerSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerSkillController],
      providers: [PlayerSkillService],
    }).compile();

    controller = module.get<PlayerSkillController>(PlayerSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
