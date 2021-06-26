import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';
import { Programa } from './interfaces/programas.interface';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {


  //programas: Programa[] = [];

  get programas() {
    return this.programService.programas;
  }

  constructor(
    private programService: ProgramsService
  ) { }

  async ngOnInit(): Promise<void> {
    //await this.obtenerDataPrograma();
  }

  /*
  async obtenerDataPrograma(){
    await this.programService.LoadPrograms();
    //this.programas = this.programService.programas;
    console.log(this.programas)
  }
  */
  
}
