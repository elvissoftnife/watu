import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { SecurityLoginComponent } from '../../shared/components/security-login/security-login.component';
import { ParamsPrograms, Program } from './interfaces/programas.interface';
import { ServicesService } from './services.service';

interface IData {
  lista_programas: Program[]
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
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

  constructor(private spinner: NgxSpinnerService, private modalService: NgbModal, private serviceService: ServicesService) { }

  async ngOnInit(): Promise<void> {
    this.getPrograms();
  }

  async getPrograms() {
    this.spinner.show("security_container_spinner")
    let allPrograms = await this.serviceService.getPrograms(this.paramsPrograms);
    this.spinner.hide("security_container_spinner")
    if (allPrograms.lista_programas.length >= 4)
      this.programs.lista_programas = this.getSubArrayPrograms(allPrograms.lista_programas);
    else
      this.programs = allPrograms.lista_programas;
  }
  getSubArrayPrograms(listPrograms: Program[]): Program[] {
    let list: Program[] = [];
    listPrograms.slice(0, 3).map((program) => {
      list.push(program);
    });
    return list;
  }


  abrirModarLogin() {
    this.modalService.open(SecurityLoginComponent, { centered: true })
  }

}
