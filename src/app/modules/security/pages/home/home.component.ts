import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SecurityLoginComponent } from '../../shared/components/security-login/security-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  abrirModalLogin() {
    this.modalService.open(SecurityLoginComponent, { centered: true })
  }
}
