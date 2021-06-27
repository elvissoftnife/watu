import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private servicesService: SecurityLoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['juan.tomairo@unmsm.edu.pe', [Validators.required, Validators.email]],
      password: ['juan.tomairo', [Validators.required]],
    });
  }
  ngAfterViewInit(): void { }
  ngOnInit(): void { }
  public async login(): Promise<void> {

    try {
      const { email, password } = this.loginForm.value;
      const data = await this.servicesService.login(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.usuario.roleId)
      localStorage.setItem("userId", data.usuario.id)

      if (data.usuario.roleId === 1) {
        this.router.navigateByUrl("user/programs/50")
      } else {
        this.router.navigateByUrl("agency/programs/50")
      }
      this.modal.dismissAll();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Usuario no encontrado",
      });
    }


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
      size: 'sm',
      centered: true,
    };

    this.modal.open(content, options);
  }
}
