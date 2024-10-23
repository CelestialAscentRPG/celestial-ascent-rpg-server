import { Module } from '@nestjs/common';
import { GameItemsService } from './game-items.service';
import { GameItemsController } from './game-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameItem } from './entities/game-item.entity';
import { TransactionManagerModule } from '../../transaction-manager/transaction-manager.module';

@Module({
  imports: [TypeOrmModule.forFeature([GameItem]), TransactionManagerModule],
  controllers: [GameItemsController],
  providers: [GameItemsService],
})
export class GameItemsModule {}
