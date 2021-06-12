import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agency-nav',
  templateUrl: './agency-nav.component.html',
  styleUrls: ['./agency-nav.component.css'],
})
export class AgencyNavComponent implements OnInit {
  url = '';

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {}

  public redirect(url: string): void {
    this.url = url;
    this.router.navigateByUrl(url);
  }
}
