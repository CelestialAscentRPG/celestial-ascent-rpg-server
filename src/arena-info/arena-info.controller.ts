import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArenaInfoService } from './arena-info.service';
import { CreateArenaInfoDto } from './dto/create-arena-info.dto';
import { UpdateArenaInfoDto } from './dto/update-arena-info.dto';

@Controller('arena-info')
export class ArenaInfoController {
  constructor(private readonly arenaInfoService: ArenaInfoService) {}

  @Post()
  create(@Body() createArenaInfoDto: CreateArenaInfoDto) {
    return this.arenaInfoService.create(createArenaInfoDto);
  }

  @Get()
  findAll() {
    return this.arenaInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arenaInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArenaInfoDto: UpdateArenaInfoDto,
  ) {
    return this.arenaInfoService.update(+id, updateArenaInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arenaInfoService.remove(+id);
  }
}
