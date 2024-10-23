import { Injectable } from '@nestjs/common';
import { CreateDungeonDto } from './dto/create-dungeon.dto';
import { UpdateDungeonDto } from './dto/update-dungeon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dungeon } from './entities/dungeon.entity';
import { TransactionManagerService } from '../utils/TransactionManagerService';

@Injectable()
export class DungeonService {
  constructor(
    @InjectRepository(Dungeon)
    private dungeonRepository: Repository<Dungeon>,
    private transactionManager: TransactionManagerService,
  ) {}

  async create(createDungeonDto: CreateDungeonDto) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.save(Dungeon, createDungeonDto);
    });
  }

  async findAll() {
    return this.dungeonRepository.find();
  }

  async findOne(id: number) {
    return this.dungeonRepository.findOneBy({ id });
  }

  async update(id: number, updateDungeonDto: UpdateDungeonDto) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.update(Dungeon, id, updateDungeonDto);
    });
  }

  async remove(id: number) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.delete(Dungeon, id);
    });
  }

  async bulkCreate(createDungeonDtos: CreateDungeonDto[]) {
    return this.transactionManager.withTransaction(async (manager) => {
      const items = createDungeonDtos.map((dto) =>
        manager.create(Dungeon, dto),
      );
      return await manager.save(items);
    });
  }

  async bulkUpdate(updateDungeonDtos: UpdateDungeonDto[]) {
    return this.transactionManager.withTransaction(async (manager) => {
      const updatePromises = updateDungeonDtos.map((dto) => {
        return manager.update(Dungeon, dto.id, dto);
      });
      return await Promise.all(updatePromises);
    });
  }
}
