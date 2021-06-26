import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramsService } from '../../programs.service';
import { BodyCreateProgram } from '../../interfaces/programas.interface';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.css']
})
export class AddProgramModalComponent {

  modal!: NgbModalRef;

  addProgramForm: FormGroup = this.fb.group({
    nombre: [ , Validators.required ,   ],
    descripcion: [ , Validators.required, ],
    vacantes: [ , [ Validators.required, Validators.min(0)] ],
    inscritos: [ , [ Validators.required, Validators.min(0)] ],
  });

  constructor(private modalService: NgbModal, private fb: FormBuilder,  private program: ProgramsService) {}

  ngOnInit() {
    this.addProgramForm.reset({
      nombre: '',
      descripcion: '',
      vacantes: null,
      inscritos: null,
    })
  }

  campoEsValido( campo: string ) {

    return this.addProgramForm.controls[campo].errors 
            && this.addProgramForm.controls[campo].touched;
  }

  closeResult = '';

  open(content: any) {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    
    this.modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async onSubmit() {
    if ( this.addProgramForm.invalid )  {
      this.addProgramForm.markAllAsTouched();
      return;
    }

    console.log(this.addProgramForm.value);
    await this.program.createProgram(this.addProgramForm.value);

    this.addProgramForm.reset();
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
