import { PartialType } from '@nestjs/swagger';
import { CreateArenaDto } from './create-arena.dto';

export class UpdateArenaDto extends PartialType(CreateArenaDto) {}
