import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserNavService } from './user-nav.service';
import Pasarela from 'src/app/utils/Pasarela';
import { ProgramDetailService } from '../../../pages/program-detail/program-detail.service';

interface ISuscripcion{
  fecha_fin_suscripcion:string,
  fecha_suscripcion:string,
  resultado:boolean,
}

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  url = '';

  suscripcion:ISuscripcion={
    fecha_fin_suscripcion:"",
    fecha_suscripcion:"",
    resultado:false,
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private servicio: UserNavService,
    private servicesService: ProgramDetailService
  ) { }

  async ngOnInit(): Promise<void> {
    //const data = await this.servicio.getData();
    //console.log(data);
    this.cargarData()
  }

  public redirect(url: string): void {
    this.url = url;
    this.router.navigateByUrl(url);
  }

  abrirModalPerfil() {
    this.modalService.open(UserProfileComponent, { centered: true })
  }

  async cargarData(){
    const data:any = await this.servicio.getSuscripcion();  
    this.suscripcion = data; 
  }

  async suscribirme(){
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
    try {
      const resp = await that.servicesService.inscribirmePrograma(+that.id);
      console.log(resp);
      
      Swal.fire('Inscrito', 'Felicidades fuiste inscrito al programa', 'success');
      that.router.navigateByUrl("/user/myprograms")
    } catch (error: any) {
      console.log(error);
      
      Swal.fire('Cancelled', error.error.mensaje, 'error');

    }
  }
}