import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-myprograms',
  templateUrl: './myprograms.component.html',
  styleUrls: ['./myprograms.component.css']
})
export class MyprogramsComponent implements OnInit {
  programs: any[]=[];
  constructor() { 

  }
  ngOnInit(): void {
    async function getPrograms(){
      try{
        const response = await fetch('https://api-watu.herokuapp.com/vacantes/51');
        return response.json();
      }catch(err){
        console.log(err);
      }
    }
    getPrograms().then(data=>{
      
      this.programs=data.reservas});
  }

  deleteProgram(event:any):void{
    Swal.fire({
      title: 'Seguro que quieres desinscribirte?',
      text: "Se eliminará la inscripción a la agencia.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, desinscribirse'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Desinscrito!',
          'El programa ha sido removido.',
          'success'
        )
      }
    })
  }
}
