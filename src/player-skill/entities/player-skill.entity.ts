import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PlayerInfo } from '../../player-info/entities/player-info.entity';

@Entity()
export class PlayerSkill {
  @PrimaryGeneratedColumn()
  id: number; // 技能ID，自动生成

  @Column({ type: 'int', comment: '技能ID' })
  skillId: number; // 技能ID

  @Column({ type: 'int', comment: '技能等级' })
  skillLevel: number; // 技能等级

  @Column({ type: 'int', comment: '技能经验' })
  skillExp: number; // 技能经验

  @ManyToOne(() => PlayerInfo, (playerInfo) => playerInfo.skill)
  playerInfo: PlayerInfo; // 关联的玩家信息
}
