import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'developers' })
export class Developer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    fullname: string;

    @Column()
    title: string;

    @Column()
    languages: string;

    @Column()
    quote: string;

    @Column()
    experience: string;

    @Column()
    salary: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
