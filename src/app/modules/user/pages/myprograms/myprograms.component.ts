import { Component, OnInit } from '@angular/core';
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
        const response = await  fetch('https://api-watu.herokuapp.com/vacantes/51');
        return response.json();
      }catch(err){
        console.trace(err);
      }
    }
    getPrograms().then(data=>{
      
      this.programs=data.reservas});
  }
}
