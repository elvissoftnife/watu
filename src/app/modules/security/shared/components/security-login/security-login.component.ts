import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { SecurityRegisterService } from '../security-register/security-register.service';
import { SecurityLoginService } from './security-login.service';
@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css'],
})
export class SecurityLoginComponent {
  loginForm: FormGroup;
  recoverForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;
  isLogin: any;
  constructor(
    public modalActive: NgbActiveModal,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    public modal: NgbModal,
    private servicesService: SecurityLoginService,
    private router: Router,
    private securityRegisterService: SecurityRegisterService
  ) {
    this.isLogin = true;
    this.recoverForm = this.fb.group({
      emailRecover: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,3})$'
          ),
        ],
      ],
    });
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,3})$'
          ),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    //[a-zA-Z]{2,3}, puede haber entre 2 y 3 caracteres y deben ser letras
    // $ significa que la expresion regular debe terminar con [a-zA-Z]{2,3}, osea despues del . debe tener entre 2 y 3 caracteres
  }

  public async enviarCorreo() {
    const { emailRecover } = this.recoverForm.value;

    await this.securityRegisterService
      .recoverPassword(emailRecover)
      .subscribe((val) => {
        if (val === true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Revisa tu correo electronico',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo no existe',
        });
      });
  }
  seeModal() {
    this.isLogin = !this.isLogin;
  }
  public async login(): Promise<void> {
    try {
      const { email, password } = this.loginForm.value;

      this.spinner.show('security_container_spinner');
      const data = await this.servicesService.login(email, password);
      this.spinner.hide('security_container_spinner');

      localStorage.setItem('token', data.token);
      localStorage.setItem('rol', data.usuario.roleId);
      localStorage.setItem('userId', data.usuario.id);
      localStorage.setItem('email', email);

      if (data.usuario.roleId === 1) {
        const userProfile = {
          id: data.usuario.id,
          name: data.usuario.nombre,
          lastName: data.usuario.apellido_paterno,
          motherLastName: data.usuario.apellido_materno,
        };
        localStorage.setItem('user', JSON.stringify(userProfile));
        this.router.navigateByUrl('user/programs');
      } else {
        this.router.navigateByUrl('agency/sedes');
      }
      this.modal.dismissAll();
    } catch (error) {
      this.spinner.hide('security_container_spinner');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no encontrado',
      });
    }
  }
  public isValid(): boolean {
    return this.loginForm.valid;
  }
  public isValidEmailSend(): boolean {
    return this.recoverForm.valid;
  }
  public open(content: any): void {
    const options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: 'sm',
      centered: true,
    };

    this.modal.open(content, options);
  }
}
