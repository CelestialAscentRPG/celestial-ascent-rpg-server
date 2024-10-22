import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PlayerStats {
  @PrimaryGeneratedColumn()
  id: number; // 属性ID，自动生成

  @Column({ type: 'int', comment: '气血' })
  health: number; // 气血

  @Column({ type: 'int', comment: '攻击' })
  attack: number; // 攻击

  @Column({ type: 'int', comment: '暴击' })
  critical: number; // 暴击

  @Column({ type: 'int', comment: '暴击伤害' })
  criticalDamage: number; // 暴击伤害

  @Column({ type: 'int', comment: '闪避' })
  dodge: number; // 闪避

  @Column({ type: 'int', comment: '命中' })
  accuracy: number; // 命中

  @Column({ type: 'int', comment: '物理穿刺' })
  physicalPierces: number; // 物理穿刺

  @Column({ type: 'int', comment: '物理抗性' })
  physicalResistance: number; // 物理抗性

  @Column({ type: 'int', comment: '法术穿刺' })
  magicalPierces: number; // 法术穿刺

  @Column({ type: 'int', comment: '法术抗性' })
  magicalResistance: number; // 法术抗性
}
