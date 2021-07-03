import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/modules/security/pages/services/services.service';
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
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await this.servicesService.inscribirmePrograma(+this.id);
          Swal.fire('Inscrito', 'Felicidades fuiste inscrito al programa', 'success');
          console.log(resp);
        } catch (error: any) {
          Swal.fire('Cancelled', error.error.mensaje, 'error');

        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
