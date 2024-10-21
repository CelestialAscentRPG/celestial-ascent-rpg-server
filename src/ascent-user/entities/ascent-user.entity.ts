import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AscentUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 32,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  nickname: string;

  @Column('text')
  token: string;
}
