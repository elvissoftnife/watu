import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { EditSedeModalComponent } from './components/edit-sede-modal/edit-sede-modal.component';
import { SedesService } from './sedes.services';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  get sedes() {
    return this.sedeService.sedes;
  }

  constructor(
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private sedeService: SedesService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show("agency_container_spinner")
    await this.obtenerDataSede();
    this.spinner.hide("agency_container_spinner")
  }

  async obtenerDataSede() {
    await this.sedeService.LoadSedes();
  }

  deleteSede(event: any, id: number) {
    Swal.fire({
      title: 'Seguro que desea eliminar la sede?',
      text: "Se eliminará la sede de la agencia.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api-watu.herokuapp.com/sede/${id}`, {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache'
        }).then().catch(err => console.log(err));
        Swal.fire(
          'Eliminado!',
          'La sede ha sido removida.',
          'success'
        ).then(() => { this.sedeService.LoadSedes(); })
      }
    })

  }

  verProgramasDeLaSede(id: number) {
    this.router.navigateByUrl("/agency/programs/" + id)
  }

  editarSede(data: any) {
    const modal = this.modalService.open(EditSedeModalComponent, { centered: true })
    modal.componentInstance.data = data;
  }

}
