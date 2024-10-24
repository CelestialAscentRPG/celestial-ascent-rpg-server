// 玩家信息
import { PlayerBackpack } from './PlayerBackpack';
import { PlayerStatsInterface } from './PlayerStatsInterface';
import { PlayerEquipmentInterface } from './PlayerEquipmentInterface';
import { PlayerSkillInterface } from './PlayerSkillInterface';

export interface PlayerInfo {
  name: string; // 玩家名称
  level: number; // 玩家等级
  exp: number; // 当前经验
  fatigue: number; // 疲劳值
  coin: number; // 灵石（货币）
  gem: number; // 星石（高级货币）
  stats: PlayerStatsInterface; // 玩家属性
  cultivation: number; // 心法
  backpack: PlayerBackpack[]; // 纳戒
  equipment: PlayerEquipmentInterface; // 当前装备
  skill: PlayerSkillInterface[]; // 装备技能
  skillStudied: PlayerSkillInterface[]; // 已学习技能
  position: number; // 玩家位置
  arenaId: number; // 竞技场ID
  needAscend: boolean; // 是否需要渡劫
}
