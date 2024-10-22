import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Arena {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '竞技场名称',
  })
  name: string;

  @Column({
    type: 'int',
    comment: '最小准入等级',
  })
  levelMin: number;

  @Column({
    type: 'int',
    comment: '最大准入等级',
  })
  levelMax: number;

  @Column({
    type: 'timestamp',
    comment: '上次结算时间',
  })
  lastSettlement: Date;

  @Column({
    type: 'int',
    comment: '上次冠军',
  })
  lastChampion: number;
}
