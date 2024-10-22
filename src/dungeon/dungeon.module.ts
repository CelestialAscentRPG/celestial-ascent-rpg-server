import { Module } from '@nestjs/common';
import { DungeonService } from './dungeon.service';
import { DungeonController } from './dungeon.controller';

@Module({
  controllers: [DungeonController],
  providers: [DungeonService],
})
export class DungeonModule {}
