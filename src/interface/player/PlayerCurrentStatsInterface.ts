import { PlayerStatsInterface } from './PlayerStatsInterface';

export interface PlayerCurrentStatsInterface extends PlayerStatsInterface {
  // 当前血量
  currentHP: number;
}
