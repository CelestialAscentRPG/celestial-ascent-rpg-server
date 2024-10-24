import { PlayerStatsInterface } from '../../../interface/player/PlayerStatsInterface';
import CONST from '../../../utils/CONST';

export const BaseGrowUpStatsCalculator = (
  level: number,
  stats: PlayerStatsInterface,
): PlayerStatsInterface => {
  const statsKeys = Object.keys(stats) as (keyof PlayerStatsInterface)[];
  const newStats: PlayerStatsInterface = {} as PlayerStatsInterface;
  statsKeys.forEach((key) => {
    // TODO 装备及技能带来的加成
    let base, final;
    switch (key) {
      // 前五种属性：(角色等级^调整幂指数 * 属性成长系数) * (1 + 属性加成百分比) + (装备属性加成 + 其他属性加成)
      case 'health':
      case 'attack':
      case 'critical': // 需要额外计算：暴击率 = 暴击 / (暴击 + 150) * 100%
      case 'dodge':
      case 'accuracy':
        base =
          Math.pow(level, CONST.BASE_GROW_UP_NUM_RATIO[key]) *
          CONST.BASE_GROW_UP_NUM[key];
        final = base * (1 + CONST.BASE_STATS_BONUS_PERCENT[key]);
        newStats[key] = Math.floor(final);
        break;
      // 物理/法术抗性/穿刺：(角色等级 * 调整百分比 * 属性成长系数) * (1 + 属性加成百分比) + (装备属性加成 + 其他属性加成)
      // 实际属性伤害：敌人属性攻击 * (1 - 最终属性抗性)
      // 实际属性抗性 = 敌人属性抗性 * (1 - 最终属性穿刺)
      case 'physicalResistance':
      case 'physicalPierces':
      case 'magicalResistance':
      case 'magicalPierces':
        base =
          level *
          CONST.BASE_GROW_UP_NUM_RATIO[key] *
          CONST.BASE_GROW_UP_NUM[key];
        final = base * (1 + CONST.BASE_STATS_BONUS_PERCENT[key]);
        newStats[key] = Math.floor(final);
        break;
      case 'criticalDamage': // 暴击伤害：150% * (1 + 暴击伤害加成百分比) + (装备暴击伤害加成 + 其他暴击伤害加成)
        newStats[key] = Math.floor(
          1.5 * (1 + CONST.BASE_STATS_BONUS_PERCENT[key]),
        );
        break;
    }
  });
  return newStats;
};
