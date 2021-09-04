import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Pasarela from 'src/app/utils/Pasarela';
import Swal from 'sweetalert2';
import { AgencyProfileComponent } from '../agency-profile/agency-profile.component';
import { AgencyNavService } from './agency-nav.service';

interface ISuscripcion{
  fecha_fin_suscripcion:string,
  fecha_suscripcion:string,
  resultado:boolean,
}

@Component({
  selector: 'app-agency-nav',
  templateUrl: './agency-nav.component.html',
  styleUrls: ['./agency-nav.component.css'],
})
export class AgencyNavComponent implements OnInit {
  url = '';

  suscripcion:ISuscripcion={
    fecha_fin_suscripcion:"",
    fecha_suscripcion:"",
    resultado:false,
  }

  constructor(
    private modalService: NgbModal, 
    private router: Router,
    private servicesService: AgencyNavService
  ) {}

  ngOnInit(): void {
    this.cargarData();
  }


  async cargarData(){
    const data:any = await this.servicesService.getSuscripcion();  
    this.suscripcion = data; 
  }

  public redirect(url: string): void {
    this.url = url;
    this.router.navigateByUrl(url);
  }

  abrirPerfil() {
    this.modalService.open(AgencyProfileComponent, {
      centered: true,
      size: 'lg',
    });
  }



  async suscribirme(){
    Swal.fire({
      title: '¿Estas seguro de suscribirte?',
      text: 'La suscripcion sera por un año por un monto de S./50.00',
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
    try {
      const resp = await that.servicesService.inscribirmePrograma(token);
      console.log(resp);
      Swal.fire('Inscrito', 'Felicidades fuiste inscrito al programa', 'success');
      window.location.reload();
    } catch (error: any) {
      console.log(error);
      console.log(error);
      
      Swal.fire('Cancelled', error.error.mensaje, 'error');

    }
  }
}
