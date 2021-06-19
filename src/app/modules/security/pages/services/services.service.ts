import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {

    let idUsuario = 51;
    const url = this.apiUrl + '/vacantes/' + idUsuario;
    const httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'}); 

    console.log("url => ", url);

    return await this.http.get(url, { headers: httpHeaders}).toPromise();
  }
}
