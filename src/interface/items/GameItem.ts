// 物品类型定义
export interface GameItem {
  id: number;
  name: string; // 物品名称
  description: string; // 物品描述
  // 物品类型 0: 武器 1: 防具 2: 消耗品 3: 材料 4: 关键道具 5: 法器 6: 灵宝 7: 护身符
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
  grades: number; // 品阶 0: 普通 1: 绿色 2: 蓝色 3: 紫色 4: 金色 5: 橙色 6: 红色
  extendedAttributes: any; // 扩展属性，如装备的属性加成
}
