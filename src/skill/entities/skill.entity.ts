import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PlayerSkill } from '../../player-skill/entities/player-skill.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number; // 技能ID，自动生成

  @Column({ type: 'varchar', comment: '技能描述' })
  description: string; // 技能描述

  // 技能属性类型 1：物理 2：法术
  @Column({
    type: 'enum',
    enum: ['physical', 'magical'],
    comment: '技能属性类型',
    default: 'physical',
  })
  type: 'physical' | 'magical';

  @Column({ type: 'json', comment: '技能特效' })
  skillEffect: object; // 技能特效

  @OneToMany(() => PlayerSkill, (playerSkill) => playerSkill.skill)
  playerSkills: PlayerSkill[]; // 关联的玩家技能
}
