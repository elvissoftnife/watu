import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/modules/user/pages/programs/programs.service';
import { IncriptionsProgramService } from './inscriptions-program.services';
@Component({
  selector: 'app-inscriptions-program',
  templateUrl: './inscriptions-program.component.html',
  styleUrls: ['./inscriptions-program.component.css']
})
export class InscriptionsProgramComponent implements OnInit {
  inscriptions: any[] = [];
  programName:string = '';
  constructor(private inscriptionsService: IncriptionsProgramService) { 
  }

  async ngOnInit(){
    //let inscriptionsId=document.location.pathname.split("/")[3];
    let inscriptionsId='1';
    let inscriptions=await this.inscriptionsService.getMyPrograms(parseInt(inscriptionsId));
    this.inscriptions=inscriptions.usuarios;
    console.log("=========>", inscriptions);
    
  }
}
