import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { SedesService } from '../../sedes.services';

@Component({
  selector: 'app-edit-sede-modal',
  templateUrl: './edit-sede-modal.component.html',
  styleUrls: ['./edit-sede-modal.component.css']
})
export class EditSedeModalComponent implements OnInit {

  @Input() data!: any;

  form: FormGroup = this.fb.group({
    distrito: [null, [Validators.required]],
    direccion: [null, [Validators.required]],
    contactame: [null, [Validators.required, Validators.min(900000000), Validators.max(999999999)]],
  })

  constructor(
    private fb: FormBuilder,
    private service: SedesService,
    public modalActive: NgbActiveModal,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.form.patchValue({
      distrito: this.data.distrito,
      direccion: this.data.direccion,
      contactame: this.data.contactame,
    })
  }

  async enviarData() {

    try {
      this.spinner.show("agency_container_spinner")
      const resp = await this.service.editarSede(this.data.id, this.form.value);
      this.spinner.hide("agency_container_spinner")
      console.log(resp);
      Swal.fire("Actualizado", resp.mensaje, "success")
      this.modalActive.close()
    } catch (error) {
      this.spinner.hide("agency_container_spinner")
      Swal.fire("Error", "No se pudo actualizar", "error")

    }

  }
}
