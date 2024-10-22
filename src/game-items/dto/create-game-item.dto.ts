import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEnum,
  IsNumber,
  IsOptional,
  Min,
  IsInt,
  Max,
} from 'class-validator';

export class CreateGameItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ description: '物品名称', example: '新手剑' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    description: '物品描述',
    example: '一把生锈的剑，勉强能够斩开敌人的防御。',
  })
  description: string;

  @IsEnum([
    'weapon',
    'armor',
    'consumable',
    'material',
    'keyItem',
    'accessory',
    'legendaryTreasure',
    'amulet',
  ])
  @ApiProperty({
    description:
      '物品类型 1: 武器 2: 防具 3: 消耗品 4: 材料 5: 关键道具 6: 法器 7: 灵宝 8: 护身符',
    example: 'weapon',
    enum: [
      'weapon',
      'armor',
      'consumable',
      'material',
      'keyItem',
      'accessory',
      'legendaryTreasure',
      'amulet',
    ],
  })
  type:
    | 'weapon'
    | 'armor'
    | 'consumable'
    | 'material'
    | 'keyItem'
    | 'accessory'
    | 'legendaryTreasure'
    | 'amulet';

  @IsNumber()
  @IsOptional()
  @Min(0)
  @ApiProperty({ description: '物品价格', example: 5000, required: false })
  value: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  @ApiProperty({ description: '最低使用等级', example: 10, required: false })
  levelMin: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(6)
  @ApiProperty({
    description: '品阶 1: 普通 2: 绿色 3: 蓝色 4: 紫色 5: 金色 6: 橙色 7: 红色',
    example: 3,
    required: false,
    enum: ['normal', 'green', 'blue', 'purple', 'gold', 'orange', 'red'],
  })
  grades: 'normal' | 'green' | 'blue' | 'purple' | 'gold' | 'orange' | 'red';

  @IsOptional()
  @ApiProperty({
    description: '扩展属性，如装备的属性加成',
    example: { attack: 10, critical: 5 },
    required: false,
    type: 'object',
  })
  extendedAttributes: any;
}
