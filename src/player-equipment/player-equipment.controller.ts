import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerEquipmentService } from './player-equipment.service';
import { CreatePlayerEquipmentDto } from './dto/create-player-equipment.dto';
import { UpdatePlayerEquipmentDto } from './dto/update-player-equipment.dto';

@Controller('player-equipment')
export class PlayerEquipmentController {
  constructor(
    private readonly playerEquipmentService: PlayerEquipmentService,
  ) {}

  @Post()
  create(@Body() createPlayerEquipmentDto: CreatePlayerEquipmentDto) {
    return this.playerEquipmentService.create(createPlayerEquipmentDto);
  }

  @Get()
  findAll() {
    return this.playerEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerEquipmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayerEquipmentDto: UpdatePlayerEquipmentDto,
  ) {
    return this.playerEquipmentService.update(+id, updatePlayerEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerEquipmentService.remove(+id);
  }
}
