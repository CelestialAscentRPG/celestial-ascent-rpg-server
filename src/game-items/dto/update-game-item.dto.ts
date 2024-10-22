import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGameItemDto } from './create-game-item.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateGameItemDto extends PartialType(CreateGameItemDto) {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ description: '物品ID', example: 1 })
  id: number;
}
