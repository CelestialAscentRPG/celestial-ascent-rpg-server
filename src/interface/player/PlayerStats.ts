// 玩家属性
export interface PlayerStats {
  health: number; // 气血
  attack: number; // 攻击
  critical: number; // 暴击
  criticalDamage: number; // 暴击伤害
  dodge: number; // 闪避
  accuracy: number; // 命中
  physicalPierces: number; // 物理穿刺
  physicalResistance: number; // 物理抗性
  magicalPierces: number; // 法术穿刺
  magicalResistance: number; // 法术抗性
}
