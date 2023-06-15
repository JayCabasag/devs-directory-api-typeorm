import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { Developer } from './typeorm/entities/Developer';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'aws.connect.psdb.cloud',
      port: 3306,
      username: 'kp0lyh0hq81fx13cnt9z',
      password: 'pscale_pw_lGGc7NzajlFUSHRFC4Hk1mJUmsjgVp54zySMOegTqom',
      database: 'devs-directory',
      entities: [Developer],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DevelopersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
