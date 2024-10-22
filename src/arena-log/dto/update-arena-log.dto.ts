import { PartialType } from '@nestjs/swagger';
import { CreateArenaLogDto } from './create-arena-log.dto';

export class UpdateArenaLogDto extends PartialType(CreateArenaLogDto) {}
