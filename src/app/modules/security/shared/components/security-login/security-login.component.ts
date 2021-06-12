import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
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
    let modal = document.querySelector('.modal-dialog') as HTMLElement;
    modal.style.height = '100%';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.marginTop = '0px';
    modal.style.marginBottom = '0px';
  }
  ngOnInit(): void {}
  login() {
    const { email, password } = this.loginForm.value;
    this.servicesService.login(email, password).subscribe((response) => {
      console.log('response', response);
      if (response == true) {
        return;
      }
      alert(response);
    });
    this.modal.dismissAll();
  }
  isValid() {
    const { email, password } = this.loginForm.value;
    console.log('email', email);
    console.log('passowrd', password);

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
    };

    this.modal.open(content, options);
  }
}
