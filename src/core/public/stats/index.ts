import { PlayerSkillInterface } from '../../../interface/player/PlayerSkillInterface';
import { PlayerEquipmentInterface } from '../../../interface/player/PlayerEquipmentInterface';
import { PlayerCurrentStatsInterface } from '../../../interface/player/PlayerCurrentStatsInterface';

/**
 * 计算单位每回合执行前的属性
 * @param playerStats
 * @param playerSkill
 * @param playerEquipment
 */
export const computeBeforeSingleCombatStartStats = ({
  playerStats,
  playerSkill,
  playerEquipment,
}: {
  playerStats: PlayerCurrentStatsInterface;
  playerSkill: PlayerSkillInterface;
  playerEquipment: PlayerEquipmentInterface;
}): PlayerCurrentStatsInterface => {
  return playerStats;
};
