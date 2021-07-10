import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AgencyProfileService } from './agency-profile.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.scss']
})
export class AgencyProfileComponent implements OnInit, AfterViewInit {

  isActive: boolean;
  profileForm: FormGroup;
  passwordForm: FormGroup;

  imagePath: any;
  imgURL: any;
  message: string = '';

  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    public modalActive: NgbActiveModal,
    public modal: NgbModal,
    private fb: FormBuilder,
    private agencyProfileService: AgencyProfileService
  ) {
    this.isActive = false;
    this.profileForm = this.fb.group({
      nombre: ['', [Validators.required]],
      acronimo: ['', [Validators.required]],
      url: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    this.getAgencyProfile();
  }

  ngOnInit(): void { }
  openForm() {
    this.isActive = true;
  }

  changePassword() {
    const { email } = this.passwordForm.value;
    this.agencyProfileService
      .sendEmailToRecoverPassword(email)
      .subscribe((resp) => console.log('resp', resp));
  }
  saveData() {
    console.log('save data');
    const { nombre, acronimo, url, imagen, descripcion } = this.profileForm.value;
    const userId = localStorage.getItem('idUser') || '';
    const request = {
      nombre: nombre,
      acronimo: acronimo,
      url: url,
      imagen: imagen,
      descripcion: descripcion
    };
    this.agencyProfileService
      .updateAgencyProfile(request, userId.toString())
      .subscribe((resp) => {
        if (resp == true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos actualizados correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al actualizar la agencia',
        });
      });
  }
  open(content: any) {
    let options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: 'lg',
      centered: true,
    };

    this.modal.open(content, options);
  }

  getAgencyProfile() {
    this.agencyProfileService
      .getAgencyProfile(1)
      .subscribe((resp) => {
        console.log('resp ==> ', resp);

        this.profileForm.patchValue({
          nombre: resp.perfil[0].nombre_agencia,
          acronimo: resp.perfil[0].acronimo_agencia,
          url: resp.perfil[0].url,
          //imagen: resp.perfil[0].image,
          descripcion: resp.perfil[0].descripcion
        });

        this.imgURL = resp.perfil[0].image;
      });
  }

  preview(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
