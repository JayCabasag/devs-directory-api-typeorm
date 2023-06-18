import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { Developer } from './typeorm/entities/Developer';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'aws.connect.psdb.cloud',
    //   port: 3306,
    //   username: 'e9d3vpl1fxchh5x0fmmc',
    //   password: 'pscale_pw_qmmjtibhcjdvgXp2Ic7RrmrirDELSFaZvIJBebCOp4w',
    //   database: 'devs-directory',
    //   entities: [Developer],
    //   synchronize: true,
    //   ssl: {
    //     rejectUnauthorized: true,
    //   },
    // }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // DevelopersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
