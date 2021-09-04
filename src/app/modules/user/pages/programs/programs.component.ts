import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ParamsPrograms, Program, Agency, Sede } from './interfaces/programas.interface';
import { ProgramsService } from './programs.service';

interface IData {
  lista_programas: Program[]
}
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  programs:IData = {
    lista_programas:[]
  }

  paramsPrograms: ParamsPrograms = {
    programa: '',
    body: {
      id_sede: 0,
      id_agencia: 0,
    }
  }

  agencies: {
    agencias: Agency[]
  } = { agencias: [] }

  sedes: {
    sedes: Sede[]
  } = { sedes: [] }

  constructor(private spinner: NgxSpinnerService, private programService: ProgramsService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show("user_container_spinner")
    await this.getPrograms();
    await this.getAgencies();
    this.spinner.hide("user_container_spinner")
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

  async getPrograms() {
    const data = await this.programService.getPrograms(this.paramsPrograms);
    console.log("data => ", data.lista_programas)
    this.programs = data;
  }

  async getAgencies() {
    this.agencies = await this.programService.getAgencies();
  }

  async getSedes(idSede: number) {
    this.sedes = await this.programService.getSedes(idSede);
  }

  changeProgram() {
    this.getPrograms();
  }

  changeAgency(agencySelected: any) {
    let idAgency = agencySelected.target.value;
    this.getSedes(idAgency);
    this.getPrograms();
  }

  changeSede() {
    this.getPrograms();
  }
  cleanFilters() {
    this.paramsPrograms = {
      programa: '',
      body: {
        id_sede: 0,
        id_agencia: 0,
      }
    }
    this.getPrograms();
  }
}
