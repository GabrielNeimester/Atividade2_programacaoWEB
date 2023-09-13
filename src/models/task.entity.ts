import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export default class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number  //exclamação significa que campo id é obrigatório

    @Column()
    title!: string

    @Column({default: false})
    completed!: boolean

}