import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PlayerInfo } from '../../player-info/entities/player-info.entity';

@Entity()
export class PlayerBackpack {
  @PrimaryGeneratedColumn()
  id: number; // 背包物品ID，自动生成

  @Column({ type: 'int', comment: '物品ID' })
  itemId: number; // 物品ID

  @Column({ type: 'int', comment: '物品数量' })
  itemCount: number; // 物品数量

  @Column({ type: 'int', comment: '物品类型' })
  itemType: number; // 物品类型

  @ManyToOne(() => PlayerInfo, (playerInfo) => playerInfo.backpack)
  playerInfo: PlayerInfo; // 关联的玩家信息
}
