import { Module } from '@nestjs/common';
import { DungeonLogService } from './dungeon-log.service';
import { DungeonLogController } from './dungeon-log.controller';

@Module({
  controllers: [DungeonLogController],
  providers: [DungeonLogService],
})
export class DungeonLogModule {}
