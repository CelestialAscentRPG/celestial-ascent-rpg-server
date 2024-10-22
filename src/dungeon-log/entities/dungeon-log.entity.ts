import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DungeonLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    comment: '用户ID',
  })
  userId: number;

  @Column({
    type: 'int',
    comment: '进入前的经验值',
  })
  beforeExp: number;

  @Column({
    type: 'timestamp',
    comment: '进入秘境的时间',
  })
  enterTime: Date;

  @Column({
    type: 'int',
    comment: '获得的经验值',
  })
  exp: number;

  @Column({
    type: 'int',
    comment: '获得的金币数量',
  })
  gold: number;

  @Column({
    type: 'simple-array',
    comment: '获得的道具ID列表',
  })
  items: number[];

  @Column({
    type: 'json',
    comment: '战斗记录',
  })
  records: {
    enemyId: number; // 敌人ID
    enemyName: string; // 敌人名称
    enemyOriginDamage: number; // 敌人原始伤害
    enemyDamage: number; // 敌人实际伤害
    playerOriginDamage: number; // 玩家原始伤害
    playerDamage: number; // 玩家伤害
    enemyHp: number; // 敌人血量
    playerHp: number; // 玩家血量
    description: string; // 描述
  }[];
}
