import { Module } from '@nestjs/common';
import { DungeonService } from './dungeon.service';
import { DungeonController } from './dungeon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dungeon } from './entities/dungeon.entity';
import { TransactionManagerModule } from '../../transaction-manager/transaction-manager.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dungeon]), TransactionManagerModule],
  controllers: [DungeonController],
  providers: [DungeonService],
})
export class DungeonModule {}
