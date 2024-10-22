import { PartialType } from '@nestjs/swagger';
import { CreateDungeonLogDto } from './create-dungeon-log.dto';

export class UpdateDungeonLogDto extends PartialType(CreateDungeonLogDto) {}
