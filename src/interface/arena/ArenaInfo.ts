// 天骄竞技场-详情
import { PlayerEquipment } from '../player/PlayerEquipment';
import { PlayerSkill } from '../player/PlayerSkill';

export interface ArenaInfo {
  arenaId: number; // 竞技场ID
  playerId: number; // 玩家ID
  defenseInfo: PlayerEquipment; // 玩家防御信息
  defenseSkill: PlayerSkill[]; // 玩家防御技能
  currentRank: number; // 当前排名
  isUnderChallenged: boolean; // 是否正在被挑战
}
