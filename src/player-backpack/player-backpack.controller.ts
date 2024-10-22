import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerBackpackService } from './player-backpack.service';
import { CreatePlayerBackpackDto } from './dto/create-player-backpack.dto';
import { UpdatePlayerBackpackDto } from './dto/update-player-backpack.dto';

@Controller('player-backpack')
export class PlayerBackpackController {
  constructor(private readonly playerBackpackService: PlayerBackpackService) {}

  @Post()
  create(@Body() createPlayerBackpackDto: CreatePlayerBackpackDto) {
    return this.playerBackpackService.create(createPlayerBackpackDto);
  }

  @Get()
  findAll() {
    return this.playerBackpackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerBackpackService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerBackpackDto: UpdatePlayerBackpackDto,
  ) {
    return this.playerBackpackService.update(+id, updatePlayerBackpackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerBackpackService.remove(+id);
  }
}
