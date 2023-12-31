import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Developer } from 'src/typeorm/entities/Developer';

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  providers: [DevelopersService],
  controllers: [DevelopersController]
})
export class DevelopersModule { }
