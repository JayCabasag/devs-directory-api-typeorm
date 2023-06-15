import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Developer } from 'src/typeorm/entities/Developer';
import { Repository } from 'typeorm'

@Injectable()
export class DevelopersService {

    constructor(
        @InjectRepository(Developer)
        private developerRepository: Repository<Developer>) { }

    create(developer: Developer): Promise<Developer> {
        return this.developerRepository.save(developer).catch(() => {
            throw new HttpException('Failed creating developer', HttpStatus.BAD_REQUEST)
        })
    }

    isUsernameExist(username): Promise<boolean> {
        return this.developerRepository
            .count({
                where: { username }
            })
            .then(count => count > 0)
            .catch(() => {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
            })

    }

    findAll(): Promise<Developer[]> {
        return this.developerRepository.find().catch(() => {
            throw new HttpException('Failed getting developers', HttpStatus.BAD_REQUEST)
        })
    }
}
