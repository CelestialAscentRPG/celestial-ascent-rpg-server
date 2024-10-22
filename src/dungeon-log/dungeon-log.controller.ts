import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DungeonLogService } from './dungeon-log.service';
import { CreateDungeonLogDto } from './dto/create-dungeon-log.dto';
import { UpdateDungeonLogDto } from './dto/update-dungeon-log.dto';

@Controller('dungeon-log')
export class DungeonLogController {
  constructor(private readonly dungeonLogService: DungeonLogService) {}

  @Post()
  create(@Body() createDungeonLogDto: CreateDungeonLogDto) {
    return this.dungeonLogService.create(createDungeonLogDto);
  }

  @Get()
  findAll() {
    return this.dungeonLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dungeonLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDungeonLogDto: UpdateDungeonLogDto) {
    return this.dungeonLogService.update(+id, updateDungeonLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dungeonLogService.remove(+id);
  }
}
