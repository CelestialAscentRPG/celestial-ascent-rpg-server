import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Dungeon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '秘境名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '秘境描述',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: ['easy', 'medium', 'hard', 'hell', 'reward', 'special'],
    comment: '秘境难度',
  })
  difficulty: 'easy' | 'medium' | 'hard' | 'hell' | 'reward' | 'special';

  @Column({
    type: 'smallint',
    comment: '推荐等级',
  })
  recommendedLevel: number;

  @Column({
    type: 'json',
    comment: '秘境奖励',
  })
  rewards: {
    expMin: number; // 最小经验值
    expMax: number; // 最大经验值
    goldMin: number; // 最大金币数量
    goldMax: number; // 最小金币数量
    itemMin: number; // 最小道具数量
    itemMax: number; // 最大道具数量
    items: {
      itemId: number; // 掉落的道具 ID
      dropRate: number; // 掉落概率，范围为 0 到 100
    }[];
  };
}
