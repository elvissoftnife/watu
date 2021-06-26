import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BodyCreateProgram, Programa } from './interfaces/programas.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  programsJson: {
    lista_programas: Programa[]
  } = { lista_programas: [] };

  private _programas: Programa[] = [];

  get programas(): Programa[] {
    //this.LoadPrograms();
    return [...this._programas];
  }

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  async LoadPrograms(): Promise<void> {
    let idUser = 1;
    const url = 'https://api-watu.herokuapp.com/programas/agencia/' + idUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.programsJson = await this.http.get<any>(url, { headers: httpHeaders }).toPromise();
    this._programas = this.programsJson.lista_programas;
  }

  async createProgram(bodyCreateProgram: BodyCreateProgram): Promise<void> {
    let idUser = 1;
    const url = 'https://api-watu.herokuapp.com/programa/crear/' + idUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    await this.http.post(url, bodyCreateProgram, { headers: httpHeaders }).toPromise();
  }
}
