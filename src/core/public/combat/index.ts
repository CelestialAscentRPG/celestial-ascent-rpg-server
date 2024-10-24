import { PlayerSkillInterface } from '../../../interface/player/PlayerSkillInterface';
import { PlayerEquipmentInterface } from '../../../interface/player/PlayerEquipmentInterface';
import { PlayerStatsInterface } from '../../../interface/player/PlayerStatsInterface';

/**
 * 执行一回合战斗，传入经等级、装备、技能修正后的状态及装备、技能带来的特效
 * @param player1Stats 玩家1的属性状态
 * @param player2Stats 玩家2的属性状态
 * @param player1Effect 玩家1的特效
 * @param player2Effect 玩家2的特效
 */
export const executeSingleCombatRound = ({
  player1Stats,
  player2Stats,
  // player1Effect,
  // player2Effect,
}: {
  player1Stats: PlayerStatsInterface;
  player2Stats: PlayerStatsInterface;
  // player1Effect: PlayerSkillInterface | PlayerEquipmentInterface;
  // player2Effect: PlayerSkillInterface | PlayerEquipmentInterface;
}): [PlayerStatsInterface, PlayerStatsInterface] => {
  return [player1Stats, player2Stats];
};
