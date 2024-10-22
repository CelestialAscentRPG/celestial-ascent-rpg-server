import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsEnum,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateGameItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
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
  value: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  levelMin: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(6)
  grades: number;

  @IsOptional()
  extendedAttributes: any;
}
