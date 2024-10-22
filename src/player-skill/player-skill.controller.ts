import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerSkillService } from './player-skill.service';
import { CreatePlayerSkillDto } from './dto/create-player-skill.dto';
import { UpdatePlayerSkillDto } from './dto/update-player-skill.dto';

@Controller('player-skill')
export class PlayerSkillController {
  constructor(private readonly playerSkillService: PlayerSkillService) {}

  @Post()
  create(@Body() createPlayerSkillDto: CreatePlayerSkillDto) {
    return this.playerSkillService.create(createPlayerSkillDto);
  }

  @Get()
  findAll() {
    return this.playerSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerSkillService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerSkillDto: UpdatePlayerSkillDto,
  ) {
    return this.playerSkillService.update(+id, updatePlayerSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerSkillService.remove(+id);
  }
}
