import { Injectable } from '@nestjs/common';
import { CreateDungeonLogDto } from './dto/create-dungeon-log.dto';
import { UpdateDungeonLogDto } from './dto/update-dungeon-log.dto';

@Injectable()
export class DungeonLogService {
  create(createDungeonLogDto: CreateDungeonLogDto) {
    return 'This action adds a new dungeonLog';
  }

  findAll() {
    return `This action returns all dungeonLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dungeonLog`;
  }

  update(id: number, updateDungeonLogDto: UpdateDungeonLogDto) {
    return `This action updates a #${id} dungeonLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dungeonLog`;
  }
}
