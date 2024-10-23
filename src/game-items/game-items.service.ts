import { Injectable } from '@nestjs/common';
import { CreateGameItemDto } from './dto/create-game-item.dto';
import { UpdateGameItemDto } from './dto/update-game-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameItem } from './entities/game-item.entity';
import { TransactionManagerService } from '../utils/TransactionManagerService';

@Injectable()
export class GameItemsService {
  constructor(
    @InjectRepository(GameItem)
    private gameItemRepository: Repository<GameItem>,
    private transactionManager: TransactionManagerService,
  ) {}

  async create(createGameItemDto: CreateGameItemDto) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.save(GameItem, createGameItemDto);
    });
  }

  async findAll() {
    return this.gameItemRepository.find();
  }

  async findOne(id: number) {
    return this.gameItemRepository.findOneBy({ id });
  }

  async update(id: number, updateGameItemDto: UpdateGameItemDto) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.update(GameItem, id, updateGameItemDto);
    });
  }

  async remove(id: number) {
    return this.transactionManager.withTransaction(async (manager) => {
      return await manager.delete(GameItem, id);
    });
  }

  async bulkCreate(createGameItemDtos: CreateGameItemDto[]) {
    return this.transactionManager.withTransaction(async (manager) => {
      const items = createGameItemDtos.map((dto) =>
        manager.create(GameItem, dto),
      );
      return await manager.save(items);
    });
  }

  async bulkUpdate(updateGameItemDtos: UpdateGameItemDto[]) {
    return this.transactionManager.withTransaction(async (manager) => {
      const updatePromises = updateGameItemDtos.map((dto) => {
        return manager.update(GameItem, dto.id, dto);
      });
      return await Promise.all(updatePromises);
    });
  }
}
