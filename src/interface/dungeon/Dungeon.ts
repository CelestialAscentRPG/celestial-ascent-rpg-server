// 秘境信息
import { DungeonInfo } from './DungeonInfo';

export interface Dungeon {
  id: number;
  name: string; // 秘境名称
  description: string; // 秘境描述
  difficulty: 'easy' | 'medium' | 'hard' | 'hell' | 'reward' | 'special'; // 秘境难度
  recommendedLevel: number; // 推荐等级
  rewards: DungeonInfo; // 秘境产出
}
