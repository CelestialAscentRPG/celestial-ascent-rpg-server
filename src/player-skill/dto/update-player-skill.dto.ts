import { PartialType } from '@nestjs/swagger';
import { CreatePlayerSkillDto } from './create-player-skill.dto';

export class UpdatePlayerSkillDto extends PartialType(CreatePlayerSkillDto) {}
