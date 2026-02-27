import { ENTITY_NAMES } from "src/common/enum/EntityNames.enum";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity(ENTITY_NAMES.CATEGORY)
export class CategoryEntity {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column()
    title:string
    @Column({unique:true})
    slug:string
    @Column()
    image:string
    @Column()
    show:boolean
    @Column({nullable:true})
    parent_id:number
    @ManyToOne(()=>CategoryEntity,category=>category.children , {onDelete:"CASCADE"})
    parent:CategoryEntity
    @OneToMany(()=>CategoryEntity,category=>category.parent)
    @JoinColumn({name:"parent_id"})
    children:CategoryEntity[]

}