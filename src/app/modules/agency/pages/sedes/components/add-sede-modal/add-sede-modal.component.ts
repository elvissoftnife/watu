import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SedesService } from '../../sedes.services';

@Component({
  selector: 'app-add-sede-modal',
  templateUrl: './add-sede-modal.component.html',
  styleUrls: ['./add-sede-modal.component.css']
})
export class AddSedeModalComponent implements OnInit {

  modal!: NgbModalRef;

  addSedeForm: FormGroup = this.fb.group({
    nombre: [, Validators.required,],
    distrito: [, Validators.required,],
    direccion: [, Validators.required,],
    contactame: [, Validators.required,],
  });

  constructor(private modalService: NgbModal, private fb: FormBuilder, private sedeService: SedesService) { }

  ngOnInit() {
    this.addSedeForm.reset({
      nombre: '',
      distrito: '',
      direccion: '',
      contactame: '',
    })
  }

  campoEsValido(campo: string) {

    return this.addSedeForm.controls[campo].errors
      && this.addSedeForm.controls[campo].touched;
  }

  closeResult = '';

  open(content: any) {
    this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });

    this.modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit() {
    if (this.addSedeForm.invalid) {
      this.addSedeForm.markAllAsTouched();
      return;
    }

    console.log(this.addSedeForm.value);
    await this.sedeService.createSede(this.addSedeForm.value);
    await this.sedeService.LoadSedes();

    this.addSedeForm.reset();
    this.modal.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
