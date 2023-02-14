import { IsBoolean,  IsDateString,  IsNotEmpty, IsNumber, Min } from "class-validator";

export default class SzekrenyDto {
    @IsNotEmpty()
    nev : string;
    @IsNumber()
    @Min(0)

    ajtok_szama : number;
    @IsNumber()
    @Min(0)
    fiokok_szama : number;
    @IsDateString()
    gyartas_datum : Date;
    @IsNumber()
    @Min(0)
    ar : number;
    @IsBoolean()
    elerheto: boolean;

}