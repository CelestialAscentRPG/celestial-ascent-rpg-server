import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AscentUserModule } from './ascent-user/ascent-user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DungeonLogModule } from './dungeon-log/dungeon-log.module';
import { ArenaModule } from './arena/arena.module';
import { ArenaLogModule } from './arena-log/arena-log.module';
import { DungeonModule } from './dungeon/dungeon.module';
import { GameItemsModule } from './game-items/game-items.module';
import { ArenaInfoModule } from './arena-info/arena-info.module';
import { PlayerEquipmentModule } from './player-equipment/player-equipment.module';
import { PlayerBackpackModule } from './player-backpack/player-backpack.module';
import { PlayerInfoModule } from './player-info/player-info.module';
import { PlayerSkillModule } from './player-skill/player-skill.module';
import { PlayerStatsModule } from './player-stats/player-stats.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(<string>configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(), // 计划任务执行器，TODO 天骄榜竞技场需要用到 https://docs.nestjs.com/techniques/task-scheduling
    AscentUserModule,
    DungeonLogModule,
    ArenaModule,
    ArenaLogModule,
    DungeonModule,
    GameItemsModule,
    ArenaInfoModule,
    PlayerEquipmentModule,
    PlayerBackpackModule,
    PlayerInfoModule,
    PlayerSkillModule,
    PlayerStatsModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
