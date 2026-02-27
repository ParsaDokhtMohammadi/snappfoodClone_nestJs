import { ENTITY_NAMES } from "src/common/enum/EntityNames.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity(ENTITY_NAMES.USER_ADDRESS)
export class UserAdressEntity {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column()
    title:string
    @Column()
    province:string
    @Column()
    city:string
    @Column()
    address:string
    @Column({nullable:true})
    postal_code:string
    @Column()
    user_id:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date
    @ManyToOne(()=>UserEntity,user=>user.address , {onDelete:"CASCADE"})
    @JoinColumn({name:"user_id"})
    user:UserEntity

}