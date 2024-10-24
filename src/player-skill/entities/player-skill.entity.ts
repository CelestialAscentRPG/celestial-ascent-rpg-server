import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PlayerInfo } from '../../player-info/entities/player-info.entity';
import { Skill } from '../../skill/entities/skill.entity';

@Entity()
export class PlayerSkill {
  @PrimaryGeneratedColumn()
  id: number; // ID，自动生成

  @Column({ type: 'int', comment: '技能ID' })
  skillId: number; // 技能ID

  @Column({ type: 'int', comment: '技能等级' })
  skillLevel: number; // 技能等级

  @Column({ type: 'int', comment: '技能经验' })
  skillExp: number; // 技能经验

  @ManyToOne(() => PlayerInfo, (playerInfo) => playerInfo.skill)
  @JoinColumn({ name: 'playerInfoId' })
  playerInfo: PlayerInfo; // 关联的玩家信息

  @ManyToOne(() => Skill, (skill) => skill.playerSkills)
  @JoinColumn({ name: 'skillId', referencedColumnName: 'id' })
  skill: Skill; // 关联的技能
}
