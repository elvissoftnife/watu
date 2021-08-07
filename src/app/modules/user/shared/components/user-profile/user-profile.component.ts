import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/modules/security/pages/services/services.service';
import Swal from 'sweetalert2';
import { UserProfileService } from './user-profile.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  isActive: boolean;
  profileForm: FormGroup;
  passwordForm: FormGroup;
  @ViewChild('contenido', { static: false }) private contenido: any;

  constructor(
    public modalActive: NgbActiveModal,
    public modal: NgbModal,
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {
    this.isActive = false;
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      motherLastName: ['', [Validators.required]],
    });
    this.passwordForm = this.fb.group(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('newPassword')?.value;
    let confirmPass = group.get('repeatPassword')?.value;
    return pass === confirmPass ? null : { mismatch: true };
  };

  passwordMatchValidator(newpassword: string) {
    return (control: FormControl) => {
      console.log('control', control);
      // control, es el campo que se declara dentro del FormGroup
      if (!control || !control.parent) {
        //control.parent == FormGroup
        return null;
      }
      //Sino
      // Si el valor que tiene el newpassword es igual al valor del control repeatNewPassword
      return control.parent.get(newpassword)!.value === control.value
        ? null
        : { mismatch: true };
    };
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    const profile = JSON.parse(localStorage.getItem('user') || '');
    console.log(profile);

    this.profileForm.patchValue({
      name: profile.name,
      lastName: profile.lastName,
      motherLastName: profile.motherLastName,
    });
    console.log(profile.name);
  }
  openForm() {
    this.isActive = true;
  }

  changePassword() {
    const profile = JSON.parse(localStorage.getItem('user') || '');
    const userID = profile.id;
    const { oldPassword, newPassword, repeatPassword } =
      this.passwordForm.value;
    this.userProfileService
      .changePasswordUser(oldPassword, newPassword, repeatPassword, userID)
      .subscribe((resp) => {
        if (resp) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Contraseña actualizada correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ha ocurrido un error',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      });
  }
  saveData() {
    const { name, lastName, motherLastName } = this.profileForm.value;
    const userId = localStorage.getItem('userId') || '';
    const request = {
      name: name,
      lastName: lastName,
      motherLastName: motherLastName,
    };
    this.userProfileService
      .updateUserProfile(request, userId.toString())
      .subscribe((resp) => {
        if (resp == true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos actualizados correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al actualizar al usuario',
        });
      });
  }
  open(content: any) {
    let options: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      size: 'lg',
      centered: true,
    };

    this.modal.open(content, options);
  }
}
