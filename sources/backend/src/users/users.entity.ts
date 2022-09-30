import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ColumnTypeUndefinedError } from 'typeorm'

@Entity()
export class Users {
    @PrimaryColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    image_url: string;
}