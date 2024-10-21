// 玩家属性
export interface PlayerStats {
  health: number; // 气血
  attack: number; // 攻击
  defense: number; // 防御
  speed: number; // 速度
  critical: number; // 暴击
  criticalDamage: number; // 暴击伤害
  dodge: number; // 闪避
  physicalResistance: number; // 物理抗性
  magicalResistance: number; // 法术抗性
}
