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
  stats: PlayerStats; // 玩家属性
  cultivation: number; // 心法
  backpack: PlayerBackpack[]; // 背包/仓库
  equipment: PlayerEquipment; // 当前装备
  skill: PlayerSkill[]; // 装备技能
  skillStudied: PlayerSkill[]; // 已学习技能
  position: number; // 玩家位置
}
