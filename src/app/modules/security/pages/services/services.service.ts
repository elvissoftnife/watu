import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamsPrograms } from './interfaces/programas.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  private _apiUrl = environment.apiUrl;

  async getPrograms(paramsPrograms: ParamsPrograms): Promise<any> {

    const url = this._apiUrl + "/programas?search=" + paramsPrograms.programa;
    const httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'}); 

    return await this.http.post(url, paramsPrograms.body, { headers: httpHeaders}).toPromise();
  }
}
