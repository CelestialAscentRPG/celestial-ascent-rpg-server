import { Module } from '@nestjs/common';
import { PlayerSkillService } from './player-skill.service';
import { PlayerSkillController } from './player-skill.controller';

@Module({
  controllers: [PlayerSkillController],
  providers: [PlayerSkillService],
})
export class PlayerSkillModule {}
