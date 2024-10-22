import { Module } from '@nestjs/common';
import { GameItemsService } from './game-items.service';
import { GameItemsController } from './game-items.controller';

@Module({
  controllers: [GameItemsController],
  providers: [GameItemsService],
})
export class GameItemsModule {}
