import { Injectable } from '@nestjs/common';
import { CreateArenaLogDto } from './dto/create-arena-log.dto';
import { UpdateArenaLogDto } from './dto/update-arena-log.dto';

@Injectable()
export class ArenaLogService {
  create(createArenaLogDto: CreateArenaLogDto) {
    return 'This action adds a new arenaLog';
  }

  findAll() {
    return `This action returns all arenaLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arenaLog`;
  }

  update(id: number, updateArenaLogDto: UpdateArenaLogDto) {
    return `This action updates a #${id} arenaLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} arenaLog`;
  }
}
