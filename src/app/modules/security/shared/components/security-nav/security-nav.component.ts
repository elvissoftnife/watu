import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-security-nav',
  templateUrl: './security-nav.component.html',
  styleUrls: ['./security-nav.component.css'],
})
export class SecurityNavComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
}
