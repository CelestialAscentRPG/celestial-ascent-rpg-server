// 秘境记录
export interface DungeonLog {
  id: number;
  userId: number;
  beforeExp: number; // 进入前的经验值
  enterTime: Date; // 进入秘境的时间
  exp: number; // 获得的经验值
  gold: number; // 获得的金币数量
  items: number[]; // 获得的道具ID列表
}
