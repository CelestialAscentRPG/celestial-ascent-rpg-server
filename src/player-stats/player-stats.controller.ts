import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';
import { CreatePlayerStatDto } from './dto/create-player-stat.dto';
import { UpdatePlayerStatDto } from './dto/update-player-stat.dto';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(private readonly playerStatsService: PlayerStatsService) {}

  @Post()
  create(@Body() createPlayerStatDto: CreatePlayerStatDto) {
    return this.playerStatsService.create(createPlayerStatDto);
  }

  @Get()
  findAll() {
    return this.playerStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerStatsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerStatDto: UpdatePlayerStatDto,
  ) {
    return this.playerStatsService.update(+id, updatePlayerStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerStatsService.remove(+id);
  }
}
