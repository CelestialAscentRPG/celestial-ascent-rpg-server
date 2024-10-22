import { Injectable } from '@nestjs/common';
import { CreateGameItemDto } from './dto/create-game-item.dto';
import { UpdateGameItemDto } from './dto/update-game-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, EntityManager } from 'typeorm';
import { GameItem } from './entities/game-item.entity';

@Injectable()
export class GameItemsService {
  constructor(
    @InjectRepository(GameItem)
    private gameItemRepository: Repository<GameItem>,
    private dataSource: DataSource,
  ) {}

  async create(createGameItemDto: CreateGameItemDto) {
    return this.withTransaction(async (manager) => {
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
    return this.withTransaction(async (manager) => {
      return await manager.update(GameItem, id, updateGameItemDto);
    });
  }

  async remove(id: number) {
    return this.withTransaction(async (manager) => {
      return await manager.delete(GameItem, id);
    });
  }

  private async withTransaction<T>(
    operation: (manager: EntityManager) => Promise<T>,
  ): Promise<T> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await operation(queryRunner.manager);
      await queryRunner.commitTransaction();
      return result;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err; // 重新抛出错误，以便上层调用者处理
    } finally {
      await queryRunner.release();
    }
  }

  async bulkCreate(createGameItemDtos: CreateGameItemDto[]) {
    return this.withTransaction(async (manager) => {
      const items = createGameItemDtos.map((dto) =>
        manager.create(GameItem, dto),
      );
      return await manager.save(items);
    });
  }

  async bulkUpdate(updateGameItemDtos: UpdateGameItemDto[]) {
    return this.withTransaction(async (manager) => {
      const updatePromises = updateGameItemDtos.map((dto) => {
        return manager.update(GameItem, dto.id, dto);
      });
      return await Promise.all(updatePromises);
    });
  }
}
