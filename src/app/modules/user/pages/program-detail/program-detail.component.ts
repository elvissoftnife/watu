import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/modules/security/pages/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss'],
})
export class ProgramDetailComponent implements OnInit {
  program$ = new Observable<any>();
  id: String = '';
  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    console.log('XD', this.route.snapshot.paramMap.get('id') || '');
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.program$ = this.servicesService.getProgram(this.id);
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
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
