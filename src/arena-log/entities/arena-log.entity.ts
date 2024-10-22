import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArenaLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    comment: '用户ID',
  })
  userId: number;

  @Column({
    type: 'int',
    comment: '挑战者ID',
  })
  enemyId: number;

  @Column({
    type: 'int',
    comment: '竞技场ID',
  })
  arenaId: number;

  @Column({
    type: 'int',
    comment: '当前排名',
  })
  currentRank: number;

  @Column({
    type: 'int',
    comment: '结束排名',
  })
  resultRank: number;

  @Column({
    type: 'timestamp',
    comment: '进入战斗的时间',
  })
  enterTime: Date;

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
