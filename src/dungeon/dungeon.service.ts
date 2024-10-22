import { Injectable } from '@nestjs/common';
import { CreateDungeonDto } from './dto/create-dungeon.dto';
import { UpdateDungeonDto } from './dto/update-dungeon.dto';

@Injectable()
export class DungeonService {
  create(createDungeonDto: CreateDungeonDto) {
    return 'This action adds a new dungeon';
  }

  findAll() {
    return `This action returns all dungeon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dungeon`;
  }

  update(id: number, updateDungeonDto: UpdateDungeonDto) {
    return `This action updates a #${id} dungeon`;
  }

  remove(id: number) {
    return `This action removes a #${id} dungeon`;
  }
}
