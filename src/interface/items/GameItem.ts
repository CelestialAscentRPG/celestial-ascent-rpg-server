// 物品类型定义
export interface GameItem {
  id: number;
  name: string; // 物品名称
  description: string; // 物品描述
  // 物品类型 1: 武器 2: 防具 3: 消耗品 4: 材料 5: 关键道具 6: 法器 7: 灵宝 8: 护身符
  type:
    | 'weapon'
    | 'armor'
    | 'consumable'
    | 'material'
    | 'keyItem'
    | 'accessory'
    | 'legendaryTreasure'
    | 'amulet';
  value: number; // 物品的价格
  levelMin: number; // 最低使用等级
  grades: number; // 品阶 1: 普通 2: 绿色 3: 蓝色 4: 紫色 5: 金色 6: 橙色 7: 红色
  extendedAttributes: any; // 扩展属性，如装备的属性加成
}
