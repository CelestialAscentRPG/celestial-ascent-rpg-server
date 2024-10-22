import { PartialType } from '@nestjs/swagger';
import { CreatePlayerEquipmentDto } from './create-player-equipment.dto';

export class UpdatePlayerEquipmentDto extends PartialType(
  CreatePlayerEquipmentDto,
) {}
