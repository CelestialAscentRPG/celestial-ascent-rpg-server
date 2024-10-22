import { Injectable } from '@nestjs/common';
import { CreateGameItemDto } from './dto/create-game-item.dto';
import { UpdateGameItemDto } from './dto/update-game-item.dto';

@Injectable()
export class GameItemsService {
  create(createGameItemDto: CreateGameItemDto) {
    return 'This action adds a new gameItem';
  }

  findAll() {
    return `This action returns all gameItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameItem`;
  }

  update(id: number, updateGameItemDto: UpdateGameItemDto) {
    return `This action updates a #${id} gameItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameItem`;
  }
}
