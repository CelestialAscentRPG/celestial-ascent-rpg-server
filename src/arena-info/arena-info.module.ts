import { Module } from '@nestjs/common';
import { ArenaInfoService } from './arena-info.service';
import { ArenaInfoController } from './arena-info.controller';

@Module({
  controllers: [ArenaInfoController],
  providers: [ArenaInfoService],
})
export class ArenaInfoModule {}
