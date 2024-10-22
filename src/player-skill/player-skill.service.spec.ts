import { Test, TestingModule } from '@nestjs/testing';
import { PlayerSkillService } from './player-skill.service';

describe('PlayerSkillService', () => {
  let service: PlayerSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerSkillService],
    }).compile();

    service = module.get<PlayerSkillService>(PlayerSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
