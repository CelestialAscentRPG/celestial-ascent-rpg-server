import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GameItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '物品名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '物品描述',
  })
  description: string;

  // 物品类型 0: 武器 1: 防具 2: 消耗品 3: 材料 4: 关键道具 5: 法器 6: 灵宝 7: 护身符
  @Column({
    type: 'enum',
    enum: [
      'weapon',
      'armor',
      'consumable',
      'material',
      'keyItem',
      'accessory',
      'legendaryTreasure',
      'amulet',
    ],
    comment: '物品类型',
  })
  type:
    | 'weapon'
    | 'armor'
    | 'consumable'
    | 'material'
    | 'keyItem'
    | 'accessory'
    | 'legendaryTreasure'
    | 'amulet';

  @Column({
    type: 'int',
    comment: '物品的价格',
  })
  value: number;

  @Column({
    type: 'int',
    comment: '最低使用等级',
  })
  levelMin: number;

  @Column({
    type: 'int',
    comment: '品阶',
  })
  grades: number;

  @Column({
    type: 'json',
    comment: '扩展属性，如装备的属性加成',
  })
  extendedAttributes: any;
}
