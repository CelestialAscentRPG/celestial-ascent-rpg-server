import { Module } from '@nestjs/common';
import { AscentUserService } from './ascent-user.service';
import { AscentUserController } from './ascent-user.controller';

@Module({
  controllers: [AscentUserController],
  providers: [AscentUserService],
})
export class AscentUserModule {}
