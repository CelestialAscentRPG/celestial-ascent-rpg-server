import { PartialType } from '@nestjs/swagger';
import { CreatePlayerInfoDto } from './create-player-info.dto';

export class UpdatePlayerInfoDto extends PartialType(CreatePlayerInfoDto) {}
