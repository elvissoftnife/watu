import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/modules/security/pages/services/services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  isActive: boolean;
  profileForm: FormGroup;
  passwordForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    public modal: NgbModal,
    private fb: FormBuilder,
    private servicesService: ServicesService
  ) {
    this.isActive = false;
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      motherLastName: ['', [Validators.required]],
    });
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    //this.open(this.contenido);
  }

  ngOnInit(): void {}
  openForm() {
    this.isActive = true;
  }
  saveData() {
    console.log('save data');
    const { name, lastName, motherLastName } = this.profileForm.value;
    const userId = localStorage.getItem('idUser') || '';
    const request = {
      nombre: name,
      apellido_paterno: lastName,
      apellido_materno: motherLastName,
    };
    this.servicesService
      .update(request, userId.toString())
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
          text: 'Error al actualizar al usuario',
        });
      });
  }
  open(content: any) {
    let options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: '100',
      centered: true,
    };

    this.modal.open(content, options);
  }
}
