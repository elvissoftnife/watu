import { Component } from '@angular/core';
import { ProgramsService } from '../../programs.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  get programs() {
    return this.programService.programs;
  }

  constructor(private programService: ProgramsService) {}
}
