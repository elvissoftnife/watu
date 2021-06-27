import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inscripcion } from './interfaces/inscriptions.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  programsJson: {
    listReserva: Inscripcion[]
  } = { listReserva: [] };

  private _listReserva: Inscripcion[] = [];

  get inscripciones(): Inscripcion[] {
    return [...this._listReserva];
  }

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  async LoadInscripciones(): Promise<void> {
    let idAgencia = 1;
    const url = 'https://api-watu.herokuapp.com/vacantes/agencia/' + idAgencia;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.programsJson = await this.http.get<any>(url, { headers: httpHeaders }).toPromise();
    this._listReserva = this.programsJson.listReserva;
  }
}
