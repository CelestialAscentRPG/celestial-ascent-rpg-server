import { Module } from '@nestjs/common';
import { ArenaLogService } from './arena-log.service';
import { ArenaLogController } from './arena-log.controller';

@Module({
  controllers: [ArenaLogController],
  providers: [ArenaLogService],
})
export class ArenaLogModule {}
