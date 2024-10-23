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

  // 物品类型 1: 武器 2: 防具 3: 消耗品 4: 材料 5: 关键道具 6: 法器 7: 灵宝 8: 护身符
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
    default: 'consumable',
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
    default: 0,
  })
  value: number;

  @Column({
    type: 'int',
    comment: '最低使用等级',
    default: 1,
  })
  levelMin: number;

  @Column({
    type: 'enum',
    comment: '品阶 1: 普通 2: 绿色 3: 蓝色 4: 紫色 5: 金色 6: 橙色 7: 红色',
    enum: ['normal', 'green', 'blue', 'purple', 'gold', 'orange', 'red'],
    default: 'normal',
  })
  grades: 'normal' | 'green' | 'blue' | 'purple' | 'gold' | 'orange' | 'red';

  @Column({
    type: 'json',
    comment: '扩展属性，如装备的属性加成',
    nullable: true,
  })
  extendedAttributes: any;
}
