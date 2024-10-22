import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DungeonService } from './dungeon.service';
import { CreateDungeonDto } from './dto/create-dungeon.dto';
import { UpdateDungeonDto } from './dto/update-dungeon.dto';

@Controller('dungeon')
export class DungeonController {
  constructor(private readonly dungeonService: DungeonService) {}

  @Post()
  create(@Body() createDungeonDto: CreateDungeonDto) {
    return this.dungeonService.create(createDungeonDto);
  }

  @Get()
  findAll() {
    return this.dungeonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dungeonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDungeonDto: UpdateDungeonDto) {
    return this.dungeonService.update(+id, updateDungeonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dungeonService.remove(+id);
  }
}
