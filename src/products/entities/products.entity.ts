import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('Product')

export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({nullable: true})
    description: string

    @Column()
    price: number

    @Column({nullable: true})
    info: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}