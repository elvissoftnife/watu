import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { SecurityLoginService } from './security-login.service';
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
    private servicesService: SecurityLoginService
  ) {
    this.auth = new Observable();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
  public login(): void {
    const { email, password } = this.loginForm.value;
    this.servicesService.login(email, password).subscribe((response) => {
      if (response === true) {
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
  public isValid(): boolean {
    const { email, password } = this.loginForm.value;
    if (email === '' || password === '') {
      return true;
    }
    return false;
  }
  public open(content: any): void {
    const options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: '100',
      centered: true,
    };

    this.modal.open(content, options);
  }
}
