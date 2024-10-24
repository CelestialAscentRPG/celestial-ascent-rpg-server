import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { PlayerBackpack } from '../../player-backpack/entities/player-backpack.entity';
import { PlayerEquipment } from '../../player-equipment/entities/player-equipment.entity';
import { PlayerStats } from '../../player-stats/entities/player-stat.entity';
import { PlayerSkill } from '../../player-skill/entities/player-skill.entity';
import { AscentUser } from '../../ascent-user/entities/ascent-user.entity';

@Entity()
export class PlayerInfo {
  @PrimaryGeneratedColumn()
  id: number; // 玩家信息ID，自动生成

  @Column({ type: 'varchar', length: 50 })
  name: string; // 玩家名称，最大长度50

  @Column({ type: 'int', default: 1 })
  level: number; // 玩家等级

  @Column({ type: 'int', default: 0 })
  exp: number; // 当前经验

  @Column({ type: 'int', default: 0 })
  fatigue: number; // 疲劳值

  @Column({ type: 'int', default: 0 })
  coin: number; // 灵石（货币）

  @Column({ type: 'int', default: 0 })
  gem: number; // 星石（高级货币）

  @OneToOne(() => PlayerStats, { cascade: true })
  @JoinColumn()
  stats: PlayerStats; // 玩家属性

  @Column({ type: 'int' })
  cultivation: number; // 心法

  @OneToMany(() => PlayerBackpack, (backpack) => backpack.playerInfo, {
    cascade: true,
  })
  backpack: PlayerBackpack[]; // 纳戒

  @OneToOne(() => PlayerEquipment, { cascade: true })
  @JoinColumn()
  equipment: PlayerEquipment; // 当前装备

  @OneToMany(() => PlayerSkill, (playerSkill) => playerSkill.playerInfo, {
    cascade: true,
  })
  skill: PlayerSkill[]; // 装备技能

  @OneToMany(() => PlayerSkill, (skillStudied) => skillStudied.playerInfo, {
    cascade: true,
  })
  skillStudied: PlayerSkill[]; // 已学习技能

  @Column({ type: 'int', default: 0 })
  position: number; // 玩家位置

  @Column({ type: 'int', nullable: true })
  arenaId: number; // 竞技场ID

  @Column({ type: 'boolean', default: false })
  needAscend: boolean; // 是否需要渡劫

  @ManyToOne(() => AscentUser, (ascentUser) => ascentUser.playerInfo)
  @JoinColumn({ name: 'userId' }) // 外键关联到 AscentUser 表的 id
  ascentUser: AscentUser; // 关联的用户

  @Column({ type: 'boolean', default: false })
  isPlayer: boolean; // 是否为玩家
}
