import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SecurityLoginComponent } from '../security-login/security-login.component';
import { SecurityRegisterComponent } from '../security-register/security-register.component';

@Component({
  selector: 'app-security-nav',
  templateUrl: './security-nav.component.html',
  styleUrls: ['./security-nav.component.css'],
})
export class SecurityNavComponent implements OnInit {
  url = '';

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void { }

  public redirect(url: string): void {
    this.url = url;
    this.router.navigateByUrl(url);
  }

  abrirModarLogin() {
    this.modalService.open(SecurityLoginComponent, { centered: true })
  }

  abrirModarRegistro() {
    this.modalService.open(SecurityRegisterComponent, { centered: true })
  }
}
