import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ServicesService } from '../../../pages/services/services.service';
import { SecurityRegisterService } from './security-register.service';

@Component({
  selector: 'app-security-register',
  templateUrl: './security-register.component.html',
  styleUrls: ['./security-register.component.scss'],
})
export class SecurityRegisterComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private servicesService: SecurityRegisterService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      motherLastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    //this.open(this.contenido);
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

  ngOnInit(): void {}
  registerUser() {
    const { name, lastName, motherLastName, email, password } =
      this.registerForm.value;
    const request = {
      nombre: name,
      apellido_paterno: lastName,
      apellido_materno: motherLastName,
      email: email,
      password: password,
    };
    this.servicesService.register(request).subscribe((val) => {
      if (val == true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al registra el usuario',
      });
    });
    this.modal.dismissAll();
  }
}
