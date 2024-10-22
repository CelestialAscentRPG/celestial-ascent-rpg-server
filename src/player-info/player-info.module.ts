import { Module } from '@nestjs/common';
import { PlayerInfoService } from './player-info.service';
import { PlayerInfoController } from './player-info.controller';

@Module({
  controllers: [PlayerInfoController],
  providers: [PlayerInfoService],
})
export class PlayerInfoModule {}
