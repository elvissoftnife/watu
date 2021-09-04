import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ProgramsService } from '../../programs.service';

@Component({
  selector: 'app-edit-program-modal',
  templateUrl: './edit-program-modal.component.html',
  styleUrls: ['./edit-program-modal.component.css']
})
export class EditProgramModalComponent {

  @Input() data!: any;

  form: FormGroup = this.fb.group({
    nombre: [null, [Validators.required]],
    descripcion: [null, [Validators.required]],
    vacantes: [null, [Validators.required, Validators.min(0)]],
  })

  closeResult = '';

  constructor(
    private fb: FormBuilder,
    public modalService: NgbModal,
    private service: ProgramsService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.form.patchValue({
      nombre: this.data.nombre,
      descripcion: this.data.descripcion,
      vacantes: this.data.vacantes,
    })
  }

  open(content: any) {
    console.log("entré");
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log("content => ", content);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log("reason => ", reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  async enviarData() {

    try {
      this.spinner.show("agency_container_spinner")
      const resp = await this.service.editProgram(this.data.id, this.form.value);
      this.spinner.hide("agency_container_spinner")
      console.log(resp);
      Swal.fire("Actualizado", resp.mensaje, "success")
      this.modalService.dismissAll()
    } catch (error) {
      this.spinner.hide("agency_container_spinner")
      Swal.fire("Error", "No se pudo actualizar", "error")

    }

  }

}
