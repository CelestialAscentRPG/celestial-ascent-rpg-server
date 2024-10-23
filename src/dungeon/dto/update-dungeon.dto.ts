import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDungeonDto } from './create-dungeon.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateDungeonDto extends PartialType(CreateDungeonDto) {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ description: '秘境ID', example: 1 })
  id: number;
}
