import { ENTITY_NAMES } from "src/common/enum/EntityNames.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserAdressEntity } from "./address.entity";

@Entity(ENTITY_NAMES.USER)
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({nullable:true})
    fullname:string
    @Column({unique:true})
    mobile:string
    @Column({nullable:true,unique:true})
    email:string
    @Column({unique:true})
    invite_code:string
    @Column({default:0})
    score:number
    @Column({nullable:true})
    agent_id:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date
    @OneToMany(()=>UserAdressEntity , address=>address.user)
    address : UserAdressEntity[]

}