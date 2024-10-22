import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PublicEntity } from '../../utils/PublicEntity';
import { Exclude } from 'class-transformer';

/**
 * 用户类实体
 */
@Entity()
export class AscentUser extends PublicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    comment: '电子邮件地址，也是账号',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 32,
    comment: '密码，MD5加密',
  })
  @Exclude()
  password: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '昵称',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '登录凭据',
    nullable: true,
  })
  token: string;
}
