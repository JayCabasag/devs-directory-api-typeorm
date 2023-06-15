import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dtos/create-developer.dto';
import { Developer } from 'src/typeorm/entities/Developer';
import { Response } from 'express';

@Controller('developers')
export class DevelopersController {

    constructor(private developersService: DevelopersService) { }
    @Get()
    async getDevelopers(): Promise<{ results: Developer[] }> {
        const developersResponse = await this.developersService.findAll()
        return { results: developersResponse }
    }

    @Post('new')
    async createDeveloper(
        @Body() createDeveloperDto: CreateDeveloperDto
    ):
        Promise<{ message: string, developer: Developer }> {
        const languages = createDeveloperDto.languages.join(',')
        const formattedDeveloper = { ...createDeveloperDto, languages } as Developer

        const username = createDeveloperDto.username
        const isUsernameExist = await this.developersService.isUsernameExist(username)

        if (isUsernameExist) {
            throw new HttpException('Developer already exist', HttpStatus.CONFLICT)
        }

        const newDeveloper = await this.developersService.create(formattedDeveloper)

        return {
            message: 'Successfully created developer',
            developer: newDeveloper
        }
    }
}
