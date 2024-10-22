import { Module } from '@nestjs/common';
import { GameItemsService } from './game-items.service';
import { GameItemsController } from './game-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameItem } from './entities/game-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameItem])],
  controllers: [GameItemsController],
  providers: [GameItemsService],
})
export class GameItemsModule {}
