import { Component, OnInit } from '@angular/core';
import { Program } from '../../interfaces/programas.interface';
import { ProgramsService } from '../../programs.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs:Program[] = [];

  constructor(private programService: ProgramsService) {}

  async ngOnInit(): Promise<void> {
    this.getPrograms();
  }

  async getPrograms(){
    this.programs = await this.programService.getData();
    console.log("programs => ", this.programs);
  }
}
