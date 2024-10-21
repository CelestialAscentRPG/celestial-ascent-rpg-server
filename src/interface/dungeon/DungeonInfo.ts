// 秘境产出
export interface DungeonInfo {
  expMin: number; // 最小经验值
  expMax: number; // 最大经验值
  goldMin: number; // 最大金币数量
  goldMax: number; // 最小金币数量
  itemMin: number; // 最小道具数量
  itemMax: number; // 最大道具数量
  items: {
    itemId: number; // 掉落的道具 ID
    dropRate: number; // 掉落概率，范围为 0 到 100
  }[];
}
