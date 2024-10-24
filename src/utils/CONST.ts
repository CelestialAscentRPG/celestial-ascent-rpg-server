import { PlayerStatsInterface } from '../interface/player/PlayerStatsInterface';

// 基础成长系数
const BASE_GROW_UP_NUM: PlayerStatsInterface = {
  accuracy: 1.5,
  attack: 5,
  critical: 2,
  criticalDamage: 1,
  dodge: 1.5,
  health: 10,
  magicalPierces: 1,
  magicalResistance: 1,
  physicalPierces: 1,
  physicalResistance: 1,
};

// 基础成长指数（基于等级的幂指数）
const BASE_GROW_UP_NUM_RATIO: PlayerStatsInterface = {
  accuracy: 1.2,
  attack: 1.5,
  critical: 1.2,
  criticalDamage: 0,
  dodge: 1.2,
  health: 1.5,
  magicalPierces: 0.6,
  magicalResistance: 1,
  physicalPierces: 0.6,
  physicalResistance: 1,
};

// 基础属性加成百分比
const BASE_STATS_BONUS_PERCENT: PlayerStatsInterface = {
  accuracy: 0,
  attack: 0,
  critical: 0,
  criticalDamage: 0,
  dodge: 0,
  health: 0,
  magicalPierces: 0,
  magicalResistance: 0,
  physicalPierces: 0,
  physicalResistance: 0,
};

export default {
  BASE_GROW_UP_NUM,
  BASE_GROW_UP_NUM_RATIO,
  BASE_STATS_BONUS_PERCENT,
};
