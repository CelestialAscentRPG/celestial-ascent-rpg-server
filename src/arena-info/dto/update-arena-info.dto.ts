import { PartialType } from '@nestjs/swagger';
import { CreateArenaInfoDto } from './create-arena-info.dto';

export class UpdateArenaInfoDto extends PartialType(CreateArenaInfoDto) {}
