import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ArenaInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    comment: '用户ID',
  })
  userId: number;

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
    comment: '是否正在被挑战',
  })
  isUnderChallenged: number;

  @Column({
    type: 'json',
    comment: '防御配置',
  })
  defenseInfo: {
    weapon: number; // 武器
    armor: number; // 防具
    accessory: number; // 法器
    legendaryTreasure: number; // 灵宝
    weaponLevel: number; // 武器等级
    armorLevel: number; // 防具等级
    accessoryLevel: number; // 法器等级
    legendaryTreasureLevel: number; // 灵宝等级
    weaponExp: number; // 武器经验
    armorExp: number; // 防具经验
    accessoryExp: number; // 法器经验
    legendaryTreasureExp: number; // 灵宝经验
    amulet: number; // 护身符（秘境加成）
  };

  @Column({
    type: 'json',
    comment: '防御技能',
  })
  defenseSkill: {
    skillId: number; // 技能ID
    skillLevel: number; // 技能等级
    skillExp: number; // 技能经验
  }[];
}
