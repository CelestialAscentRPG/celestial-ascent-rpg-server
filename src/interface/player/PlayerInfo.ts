// 玩家信息
import { PlayerBackpack } from './PlayerBackpack';
import { PlayerStats } from './PlayerStats';
import { PlayerEquipment } from './PlayerEquipment';
import { PlayerSkill } from './PlayerSkill';

export interface PlayerInfo {
  name: string; // 玩家名称
  level: number; // 玩家等级
  exp: number; // 当前经验
  fatigue: number; // 疲劳值
  coin: number; // 灵石（货币）
  gem: number; // 星石（高级货币）
  stats: PlayerStats; // 玩家属性
  cultivation: number; // 心法
  backpack: PlayerBackpack[]; // 纳戒
  equipment: PlayerEquipment; // 当前装备
  skill: PlayerSkill[]; // 装备技能
  skillStudied: PlayerSkill[]; // 已学习技能
  position: number; // 玩家位置
  arenaId: number; // 竞技场ID
  needAscend: boolean; // 是否需要渡劫
}
