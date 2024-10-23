import {
  IsEnum,
  IsInt,
  IsJSON,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDungeonDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ description: '秘境名称', example: '庐陵钟家地牢' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    description: '秘境描述',
    example:
      '你从庐陵钟家的地牢中缓缓醒来，丹田被毁，前途一片黑暗。不管如何，要先活下去。',
  })
  description: string;

  @IsEnum(['easy', 'medium', 'hard', 'hell', 'reward', 'special'])
  @ApiProperty({
    description: '秘境难度 1: 简单 2: 中等 3: 困难 4: 禁地 5: 活动 6: 渡劫',
    example: 'easy',
    enum: ['easy', 'medium', 'hard', 'hell', 'reward', 'special'],
  })
  type: 'easy' | 'medium' | 'hard' | 'hell' | 'reward' | 'special';

  @IsInt()
  @Min(1)
  @ApiProperty({ description: '推荐等级', example: 10 })
  recommendedLevel: number;

  @IsJSON()
  @ApiProperty({
    description: '秘境奖励',
    examples: {
      expMin: 0,
      expMax: 100,
      goldMin: 50,
      goldMax: 100,
      itemMin: 0,
      itemMax: 3,
      items: [
        {
          itemId: 10001,
          dropRate: 25,
        },
        {
          itemId: 10002,
          dropRate: 25,
        },
        {
          itemId: 10003,
          dropRate: 50,
        },
      ],
    },
  })
  rewards: object;
}
