import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { MyprogramsService } from './myprograms.service';
@Component({
  selector: 'app-myprograms',
  templateUrl: './myprograms.component.html',
  styleUrls: ['./myprograms.component.css']
})
export class MyprogramsComponent implements OnInit {
  programs: any[] = [];
  constructor(
    private spinner: NgxSpinnerService, private service: MyprogramsService) {

  }

  async ngOnInit(): Promise<void> {
    this.spinner.show("user_container_spinner")
    await this.getData();
    this.spinner.hide("user_container_spinner")
  }

  async getData() {
    try {
      const response: any = await this.service.getMyPrograms();
      console.log(response);

      this.programs = response.reservas
    } catch (err) {
      console.log(err);
    }
  }

  async deleteProgram(event: any, id: number) {
    Swal.fire({
      title: 'Seguro que quieres desinscribirte?',
      text: "Se eliminará la inscripción a la agencia.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, desinscribirse'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api-watu.herokuapp.com/vacantes/${id}`, {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache'
        }).then(async response => {
          await this.getData();
          Swal.fire(
            'Desinscrito!',
            'El programa ha sido removido.',
            'success'
          )
        }).catch(err => console.log(err));
      }
    })
  }
}
