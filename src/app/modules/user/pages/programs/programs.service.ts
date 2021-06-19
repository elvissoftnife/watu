import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamsPrograms } from './interfaces/programas.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) {}

  private _apiUrl = environment.apiUrl;

  async getPrograms(paramsPrograms: ParamsPrograms): Promise<any> {

    const url = this._apiUrl + "/programas?search=" + paramsPrograms.programa;
    const httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'}); 

    return await this.http.post(url, paramsPrograms.body, { headers: httpHeaders}).toPromise();
  }

  async getAgencies(): Promise<any> {

    const url = this._apiUrl + "/agencias?search=";
    const httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'}); 

    return await this.http.get(url, { headers: httpHeaders}).toPromise();
  }

  async getSedes(idSede:number): Promise<any> {

    const url = this._apiUrl + "/sedes/" + idSede;
    const httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'}); 

    return await this.http.get(url, { headers: httpHeaders}).toPromise();
  }

}
