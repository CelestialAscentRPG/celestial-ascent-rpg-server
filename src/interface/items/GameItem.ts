// 物品类型定义
export interface GameItem {
  id: number;
  name: string; // 物品名称
  description: string; // 物品描述
  // 物品类型 0: 武器 1: 防具 2: 消耗品 3: 材料 4: 关键道具 5: 法器 6: 灵宝
  type:
    | 'weapon'
    | 'armor'
    | 'consumable'
    | 'material'
    | 'keyItem'
    | 'accessory'
    | 'legendaryTreasure';
  value: number; // 物品的价格
}
