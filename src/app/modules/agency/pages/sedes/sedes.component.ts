import { Component, OnInit } from '@angular/core';
import { SedesService } from './sedes.services';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  get sedes() {
    return this.sedeService.sedes;
  }

  constructor(
    private sedeService: SedesService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerDataSede();
  }

  async obtenerDataSede() {
    await this.sedeService.LoadSedes();
  }

}
