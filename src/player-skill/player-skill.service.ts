import { Injectable } from '@nestjs/common';
import { CreatePlayerSkillDto } from './dto/create-player-skill.dto';
import { UpdatePlayerSkillDto } from './dto/update-player-skill.dto';

@Injectable()
export class PlayerSkillService {
  create(createPlayerSkillDto: CreatePlayerSkillDto) {
    return 'This action adds a new playerSkill';
  }

  findAll() {
    return `This action returns all playerSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerSkill`;
  }

  update(id: number, updatePlayerSkillDto: UpdatePlayerSkillDto) {
    return `This action updates a #${id} playerSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerSkill`;
  }
}
