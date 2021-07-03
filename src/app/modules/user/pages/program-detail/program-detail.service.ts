import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParamsPrograms } from '../programs/interfaces/programas.interface';


@Injectable({
  providedIn: 'root'
})
export class ProgramDetailService {
  constructor(private http: HttpClient) { }

  private _apiUrl = environment.apiUrl;

  async getPrograms(id: string): Promise<any> {

    const url = this._apiUrl + "/programas/" + id;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }

  async inscribirmePrograma(programaId: number): Promise<any> {
    const userId = localStorage.getItem("userId");
    const url = this._apiUrl + "/vacante/reserva/" + userId;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.post(url, { id_programa: programaId }, { headers: httpHeaders }).toPromise();
  }
}