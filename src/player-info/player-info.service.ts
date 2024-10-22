import { Injectable } from '@nestjs/common';
import { CreatePlayerInfoDto } from './dto/create-player-info.dto';
import { UpdatePlayerInfoDto } from './dto/update-player-info.dto';

@Injectable()
export class PlayerInfoService {
  create(createPlayerInfoDto: CreatePlayerInfoDto) {
    return 'This action adds a new playerInfo';
  }

  findAll() {
    return `This action returns all playerInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerInfo`;
  }

  update(id: number, updatePlayerInfoDto: UpdatePlayerInfoDto) {
    return `This action updates a #${id} playerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerInfo`;
  }
}
