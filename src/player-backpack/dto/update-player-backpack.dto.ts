import { PartialType } from '@nestjs/swagger';
import { CreatePlayerBackpackDto } from './create-player-backpack.dto';

export class UpdatePlayerBackpackDto extends PartialType(
  CreatePlayerBackpackDto,
) {}
