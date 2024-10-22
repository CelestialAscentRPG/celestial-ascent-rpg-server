import { Injectable } from '@nestjs/common';
import { CreateArenaDto } from './dto/create-arena.dto';
import { UpdateArenaDto } from './dto/update-arena.dto';

@Injectable()
export class ArenaService {
  create(createArenaDto: CreateArenaDto) {
    return 'This action adds a new arena';
  }

  findAll() {
    return `This action returns all arena`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arena`;
  }

  update(id: number, updateArenaDto: UpdateArenaDto) {
    return `This action updates a #${id} arena`;
  }

  remove(id: number) {
    return `This action removes a #${id} arena`;
  }
}
