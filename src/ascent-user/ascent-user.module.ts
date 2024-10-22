import { Module } from '@nestjs/common';
import { AscentUserService } from './ascent-user.service';
import { AscentUserController } from './ascent-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AscentUser } from './entities/ascent-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AscentUser])],
  controllers: [AscentUserController],
  providers: [AscentUserService],
})
export class AscentUserModule {}
