import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramsService } from '../../programs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-program-modal',
  templateUrl: './add-program-modal.component.html',
  styleUrls: ['./add-program-modal.component.css']
})
export class AddProgramModalComponent {

  modal!: NgbModalRef;
  formData!:FormData;

  addProgramForm: FormGroup = this.fb.group({
    nombre: [ , Validators.required ,   ],
    descripcion: [ , Validators.required, ],
    vacantes: [ , [ Validators.required, Validators.min(0)] ],
    imagen: [ , Validators.required, ],
  });

  constructor(private modalService: NgbModal, private fb: FormBuilder,  private programService: ProgramsService) {}

  ngOnInit() {
    this.addProgramForm.reset({
      nombre: '',
      descripcion: '',
      vacantes: null,
      imagen: ['']
    });
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
    this.formData = new FormData();
    console.log("body => ", this.addProgramForm.value);
    if ( this.addProgramForm.invalid )  {
      this.addProgramForm.markAllAsTouched();
      return;
    }

    this.formData.append('nombre', this.addProgramForm.value.nombre);
    this.formData.append('descripcion', this.addProgramForm.value.descripcion);
    this.formData.append('vacantes', this.addProgramForm.value.vacantes);
    this.formData.append('image', this.addProgramForm.value.imagen);

    console.log("payload => ", this.formData);
    await this.programService.createProgram(this.formData);
    await this.programService.LoadPrograms();

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

  onFileSelect(event:any){
      
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addProgramForm.value.imagen = file;
      console.log("imagen => ", this.addProgramForm.value.imagen);
      console.log("imagen valid => ", this.addProgramForm.value.imagen.valid);
    }else{
      this.addProgramForm.value.imagen.valid = false;
    }
  }

}
