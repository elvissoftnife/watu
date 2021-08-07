import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/modules/security/pages/services/services.service';
import Pasarela from 'src/app/utils/Pasarela';
import Swal from 'sweetalert2';
import { ProgramDetailService } from './program-detail.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss'],
})
export class ProgramDetailComponent implements OnInit {
  program: any;
  id: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicesService: ProgramDetailService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log('XD', this.route.snapshot.paramMap.get('id') || '');
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.program = await this.servicesService.getPrograms(this.id);

    console.log(this.program);

  }
  signUp() {
    Swal.fire({
      title: '¿Estas seguro de inscribirte?',
      text: 'Se enviara la información a la agencia y ellos se pondran en contacto contigo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,inscribirme',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#FB4381',
      cancelButtonColor: 'grey',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await this.servicesService.inscribirmePrograma(+this.id);
          Swal.fire('Inscrito', 'Felicidades fuiste inscrito al programa', 'success');
          console.log(resp);
        } catch (error: any) {
          Swal.fire('Cancelled', error.error.mensaje, 'error');

        }
      }
    });
  }



  reservarVacante() {
    Swal.fire({
      title: '¿Estas seguro de reservar la vacante?',
      text: 'Para tener asegurado una vacante, es necesario realizar un pago.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,proceder',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#FB4381',
      cancelButtonColor: 'grey',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Pasarela.sendPay(5000);
        Pasarela.listenPay(this.ejecutarServicio, this);
      }
    });
  }

  async ejecutarServicio(token: string, that: any) {

    console.log("---------------------");
    console.log(token);

    console.log("---------------------");

    try {
      const resp = await that.servicesService.inscribirmePrograma(+that.id);
      Swal.fire('Inscrito', 'Felicidades fuiste inscrito al programa', 'success');
      that.router.navigateByUrl("/user/myprograms")
    } catch (error: any) {
      Swal.fire('Cancelled', error.error.mensaje, 'error');

    }
  }

}
