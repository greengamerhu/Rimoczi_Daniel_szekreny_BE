import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class Szekreny {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    nev : string;
    @Column({
        default: 0
    })
    ajtok_szama : number;
    @Column({
        default : 0
    })
    fiokok_szama : number;
    @Column()
    gyartas_datum : Date;
    @Column({
        default : 1
    }) 
    ar : number;
    @Column({
        default : false
    }) 
    elerheto: boolean;

}