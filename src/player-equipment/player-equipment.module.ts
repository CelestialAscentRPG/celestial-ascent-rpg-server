import { Module } from '@nestjs/common';
import { PlayerEquipmentService } from './player-equipment.service';
import { PlayerEquipmentController } from './player-equipment.controller';

@Module({
  controllers: [PlayerEquipmentController],
  providers: [PlayerEquipmentService],
})
export class PlayerEquipmentModule {}
