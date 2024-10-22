import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PlayerEquipment {
  @PrimaryGeneratedColumn()
  id: number; // 装备ID，自动生成

  @Column({ type: 'int', comment: '武器' })
  weapon: number; // 武器

  @Column({ type: 'int', comment: '防具' })
  armor: number; // 防具

  @Column({ type: 'int', comment: '法器' })
  accessory: number; // 法器

  @Column({ type: 'int', comment: '灵宝' })
  legendaryTreasure: number; // 灵宝

  @Column({ type: 'int', comment: '武器等级' })
  weaponLevel: number; // 武器等级

  @Column({ type: 'int', comment: '防具等级' })
  armorLevel: number; // 防具等级

  @Column({ type: 'int', comment: '法器等级' })
  accessoryLevel: number; // 法器等级

  @Column({ type: 'int', comment: '灵宝等级' })
  legendaryTreasureLevel: number; // 灵宝等级

  @Column({ type: 'int', comment: '武器经验' })
  weaponExp: number; // 武器经验

  @Column({ type: 'int', comment: '防具经验' })
  armorExp: number; // 防具经验

  @Column({ type: 'int', comment: '法器经验' })
  accessoryExp: number; // 法器经验

  @Column({ type: 'int', comment: '灵宝经验' })
  legendaryTreasureExp: number; // 灵宝经验

  @Column({ type: 'int', comment: '护身符' })
  amulet: number; // 护身符（秘境加成）
}
