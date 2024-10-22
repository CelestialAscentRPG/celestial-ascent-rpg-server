import { Injectable } from '@nestjs/common';
import { CreateArenaInfoDto } from './dto/create-arena-info.dto';
import { UpdateArenaInfoDto } from './dto/update-arena-info.dto';

@Injectable()
export class ArenaInfoService {
  create(createArenaInfoDto: CreateArenaInfoDto) {
    return 'This action adds a new arenaInfo';
  }

  findAll() {
    return `This action returns all arenaInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arenaInfo`;
  }

  update(id: number, updateArenaInfoDto: UpdateArenaInfoDto) {
    return `This action updates a #${id} arenaInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} arenaInfo`;
  }
}
