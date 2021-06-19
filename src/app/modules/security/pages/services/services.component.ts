import { Component } from '@angular/core';
import { ParamsPrograms, Program } from './interfaces/programas.interface';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  {
  programs:{
    lista_programas: Program[]
  } = { lista_programas: []};

  paramsPrograms:ParamsPrograms = {
    programa: '',
    body: {
      id_sede: 0,
      id_agencia: 0,
    }
  }

  constructor(private serviceService: ServicesService) {}

  async ngOnInit(): Promise<void> {
    this.getPrograms();
  }

  async getPrograms(){
    let allPrograms = await this.serviceService.getPrograms(this.paramsPrograms);
    console.log("allPrograms => ", allPrograms.lista_programas);
    console.log("allPrograms.length => ", allPrograms.lista_programas.length);
    if(allPrograms.lista_programas.length >= 4)
      this.programs.lista_programas = this.getSubArrayPrograms(allPrograms.lista_programas);
    else
      this.programs = allPrograms.lista_programas;
  }
  getSubArrayPrograms(listPrograms: Program[]):  Program[]{
    console.log("lista => ", listPrograms);
    let list: Program[] = [];
    listPrograms.slice(0, 3).map((program) => {
      list.push(program);
    });
    return list;
  }
}
