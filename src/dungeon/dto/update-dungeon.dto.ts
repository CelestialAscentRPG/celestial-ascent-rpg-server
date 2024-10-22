import { PartialType } from '@nestjs/swagger';
import { CreateDungeonDto } from './create-dungeon.dto';

export class UpdateDungeonDto extends PartialType(CreateDungeonDto) {}
