import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsService } from './us.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  form: FormGroup = this.fb.group({
    asunto: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    mensaje: [null, [Validators.required]]
  })

  constructor(private fb: FormBuilder, private service :UsService) { }

  ngOnInit(): void {
  }

  async enviarInfo(){
    const data = this.form.value
    const resp = await this.service.enviar(data);
    Swal.fire("Mensaje Enviado", resp.message,'success')
    this.form.reset();
  }
}
