// 天骄竞技场
export interface Arena {
  id: number;
  name: string; // 竞技场名称
  levelMin: number; // 最小准入等级
  levelMax: number; // 最大准入等级
  lastSettlement: Date; // 上次结算时间
  lastChampion: number; // 上次冠军
}
