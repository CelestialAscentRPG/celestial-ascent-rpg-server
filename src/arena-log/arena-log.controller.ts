import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArenaLogService } from './arena-log.service';
import { CreateArenaLogDto } from './dto/create-arena-log.dto';
import { UpdateArenaLogDto } from './dto/update-arena-log.dto';

@Controller('arena-log')
export class ArenaLogController {
  constructor(private readonly arenaLogService: ArenaLogService) {}

  @Post()
  create(@Body() createArenaLogDto: CreateArenaLogDto) {
    return this.arenaLogService.create(createArenaLogDto);
  }

  @Get()
  findAll() {
    return this.arenaLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arenaLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArenaLogDto: UpdateArenaLogDto) {
    return this.arenaLogService.update(+id, updateArenaLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arenaLogService.remove(+id);
  }
}
