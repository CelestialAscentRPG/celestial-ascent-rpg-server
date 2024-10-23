import { Module } from '@nestjs/common';
import { DungeonService } from './dungeon.service';
import { DungeonController } from './dungeon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dungeon } from './entities/dungeon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dungeon])],
  controllers: [DungeonController],
  providers: [DungeonService],
})
export class DungeonModule {}
