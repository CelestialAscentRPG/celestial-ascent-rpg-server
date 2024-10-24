// 天骄竞技场-详情
import { PlayerEquipmentInterface } from '../player/PlayerEquipmentInterface';
import { PlayerSkillInterface } from '../player/PlayerSkillInterface';

export interface ArenaInfo {
  arenaId: number; // 竞技场ID
  playerId: number; // 玩家ID
  defenseInfo: PlayerEquipmentInterface; // 玩家防御信息
  defenseSkill: PlayerSkillInterface[]; // 玩家防御技能
  currentRank: number; // 当前排名
  isUnderChallenged: boolean; // 是否正在被挑战
}
