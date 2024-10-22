import { Module } from '@nestjs/common';
import { ArenaService } from './arena.service';
import { ArenaController } from './arena.controller';

@Module({
  controllers: [ArenaController],
  providers: [ArenaService],
})
export class ArenaModule {}
