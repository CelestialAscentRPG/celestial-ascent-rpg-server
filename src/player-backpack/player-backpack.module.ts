import { Module } from '@nestjs/common';
import { PlayerBackpackService } from './player-backpack.service';
import { PlayerBackpackController } from './player-backpack.controller';

@Module({
  controllers: [PlayerBackpackController],
  providers: [PlayerBackpackService],
})
export class PlayerBackpackModule {}
