import { Injectable } from '@nestjs/common';
import { CreatePlayerBackpackDto } from './dto/create-player-backpack.dto';
import { UpdatePlayerBackpackDto } from './dto/update-player-backpack.dto';

@Injectable()
export class PlayerBackpackService {
  create(createPlayerBackpackDto: CreatePlayerBackpackDto) {
    return 'This action adds a new playerBackpack';
  }

  findAll() {
    return `This action returns all playerBackpack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerBackpack`;
  }

  update(id: number, updatePlayerBackpackDto: UpdatePlayerBackpackDto) {
    return `This action updates a #${id} playerBackpack`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerBackpack`;
  }
}
