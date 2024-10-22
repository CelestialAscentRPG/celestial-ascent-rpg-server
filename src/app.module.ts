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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
