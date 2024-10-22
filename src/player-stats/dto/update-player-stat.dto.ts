import { PartialType } from '@nestjs/swagger';
import { CreatePlayerStatDto } from './create-player-stat.dto';

export class UpdatePlayerStatDto extends PartialType(CreatePlayerStatDto) {}
