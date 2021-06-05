import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserNavService } from './user-nav.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  url = '';

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private servicio: UserNavService
  ) {}

  async ngOnInit(): Promise<void> {
    const data = await this.servicio.getData();
    console.log(data);
  }

  public redirect(url: string): void {
    this.url = url;
    this.router.navigateByUrl(url);
  }
}
