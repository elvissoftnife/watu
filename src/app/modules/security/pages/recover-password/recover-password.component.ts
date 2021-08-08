import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverPasswordComponent implements OnInit {
  recoverPasswordForm: FormGroup;
  token = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private spinner: NgxSpinnerService
  ) {
    this.recoverPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required]],
      repeatNewPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.router.url.split('?')[1].split('=')[1]);
    this.token = this.router.url.split('?')[1].split('=')[1];
    console.log('token', this.token);
  }
  updatePassword() {
    const { newPassword, repeatNewPassword } = this.recoverPasswordForm.value;
    const request = {
      token: this.token,
      password: newPassword,
      new_password: repeatNewPassword,
    };
    this.spinner.show('security_container_spinner');
    this.servicesService.updatePassword(request).subscribe((val) => {
      if (val === true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contraseña actualizada correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.spinner.hide('security_container_spinner');

        return;
      }
      this.spinner.hide('security_container_spinner');

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al actualizar la contraseña',
      });
    });
  }
}
