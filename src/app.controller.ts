import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import SzekrenyDto from './szekreny.dto';
import Szekreny from './szekreny.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get("/szekreny")
  async getSzekreny() {
    const szekrenyRepo = this.dataSource.getRepository(Szekreny)
    const rows = await szekrenyRepo.find()
    return {szekrenyek : rows}
  }
  @Delete('/szekreny/:id')
  async deleteSzekreny(@Param('id') id: number) {
    const szekrenyRepo = this.dataSource.getRepository(Szekreny)
    await szekrenyRepo.delete(id)
  }
  @Post('/szekreny') 
  async postSzekreny(@Body() szekreny : SzekrenyDto) {
    const szekrenyRepo = this.dataSource.getRepository(Szekreny)
    if(!szekreny.nev) {
      throw new BadRequestException('A nevet meg kell adni')
    }
    let ujSzekreny = new Szekreny()
    ujSzekreny.nev = szekreny.nev 
    ujSzekreny.ajtok_szama = szekreny.ajtok_szama 
    ujSzekreny.fiokok_szama = szekreny.fiokok_szama 
    ujSzekreny.ar = szekreny.ar
    ujSzekreny.gyartas_datum = szekreny.gyartas_datum
    ujSzekreny.elerheto = szekreny.elerheto
    await szekrenyRepo.save(ujSzekreny)
    

  }
  

}
