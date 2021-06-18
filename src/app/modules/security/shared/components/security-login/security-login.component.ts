import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ServicesService } from '../../../pages/services/services.service';
@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css'],
})
export class SecurityLoginComponent implements OnInit, AfterViewInit {
  auth: Observable<any>;
  loginForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private servicesService: ServicesService
  ) {
    this.auth = new Observable();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    this.open(this.contenido);
  }
  ngOnInit(): void {}
  login() {
    const { email, password } = this.loginForm.value;
    this.servicesService.login(email, password).subscribe((response) => {
      if (response == true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      console.log(response);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: response,
      });
    });
    this.modal.dismissAll();
  }
  isValid() {
    const { email, password } = this.loginForm.value;
    if (email === '' || password === '') {
      return true;
    }
    return false;
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
