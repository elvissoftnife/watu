import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  isActive: boolean;
  profileForm: FormGroup;
  passwordForm: FormGroup;
  constructor(public modal: NgbModal, private fb: FormBuilder) {
    this.isActive = false;
    this.profileForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      numeroCuenta: ['', [Validators.required]],
    });
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  openForm() {
    this.isActive = true;
  }
}
