import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameItemsService } from './game-items.service';
import { CreateGameItemDto } from './dto/create-game-item.dto';
import { UpdateGameItemDto } from './dto/update-game-item.dto';

@Controller('game-items')
export class GameItemsController {
  constructor(private readonly gameItemsService: GameItemsService) {}

  @Post()
  create(@Body() createGameItemDto: CreateGameItemDto) {
    return this.gameItemsService.create(createGameItemDto);
  }

  @Get()
  findAll() {
    return this.gameItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGameItemDto: UpdateGameItemDto,
  ) {
    return this.gameItemsService.update(+id, updateGameItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameItemsService.remove(+id);
  }
}
