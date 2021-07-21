import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';
import { Programa } from './interfaces/programas.interface';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {


  //programas: Programa[] = [];

  get programas() {
    return this.programService.programas;
  }

  constructor(
    private programService: ProgramsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerDataPrograma();
  }


  async obtenerDataPrograma() {
    await this.programService.LoadPrograms();
    console.log(this.programas);
  }
  deleteProgram(event:any, id:number){
    Swal.fire({
      title: 'Seguro que desea eliminar el programa?',
      text: "Se eliminará el programa de la agencia.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://api-watu.herokuapp.com/programa/delete/${id}`,{
          method: 'DELETE',
          mode:'cors',
          cache: 'no-cache'}).then().catch(err=>console.log(err));
        Swal.fire(
          'Eliminado!',
          'El programa ha sido removido.',
          'success'
          ).then(() => { this.programService.LoadPrograms(); })
      }
    })
  }

  changeVisible(event:any, program:any){
    event.target.checked = program.estado===1?true:false;

    let activar = (program.estado===1?"desactivar":"activar");
    let activado = (program.estado===1?"desactivado":"activado");
    
    Swal.fire({
      title: "Seguro que desea " +activar+  " el programa?",
      text: "Se "+(program.id===0?"desactivará":"activará")+" el programa de la agencia.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Sí, "+activar,
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://api-watu.herokuapp.com/programa/${program.id}`,{
          method: 'PUT',
          mode:'cors',
          cache: 'no-cache'}).then().catch(err=>console.log(err));
        Swal.fire(
          activado.toUpperCase()+"!",
          "El programa ha sido "+activado,
          'success'
          ).then(() => { 
            this.programService.LoadPrograms(); 
          });
      }
      event.target.checked = program.estado===1?true:false;
    });
  }

}
