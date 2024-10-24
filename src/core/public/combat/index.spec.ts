import { executeSingleCombatRound } from './index';
import { PlayerStatsInterface } from '../../../interface/player/PlayerStatsInterface';
import { BaseGrowUpStatsCalculator } from '../calculator/BaseGrowUpStats';

describe('executeSingleCombatRound', () => {
  it('test combat', () => {
    const player1Stats: PlayerStatsInterface = {
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
    const level1Stats: PlayerStatsInterface = BaseGrowUpStatsCalculator(
      1,
      player1Stats,
    );
    const level5Stats: PlayerStatsInterface = BaseGrowUpStatsCalculator(
      5,
      player1Stats,
    );
    const level10Stats: PlayerStatsInterface = BaseGrowUpStatsCalculator(
      10,
      player1Stats,
    );
    console.log(level1Stats, level5Stats, level10Stats);
    // const player2Stats: PlayerStatsInterface = {
    //   accuracy: 0,
    //   attack: 0,
    //   critical: 0,
    //   criticalDamage: 0,
    //   dodge: 0,
    //   health: 0,
    //   magicalPierces: 0,
    //   magicalResistance: 0,
    //   physicalPierces: 0,
    //   physicalResistance: 0,
    // };
    // const result = executeSingleCombatRound({
    //   player1Stats: player1Stats,
    //   player2Stats: player2Stats,
    // });
    // console.log(result);
  });
});
