import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class PublicEntity {
  @CreateDateColumn()
  createdDate: Date;
  @UpdateDateColumn()
  updatedDate: Date;
}
