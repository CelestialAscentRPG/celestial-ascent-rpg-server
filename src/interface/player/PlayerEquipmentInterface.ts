// 玩家当前装备
export interface PlayerEquipmentInterface {
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
}
