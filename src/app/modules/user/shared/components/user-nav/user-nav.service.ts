import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserNavService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    const url = this.apiUrl + '/listar-programas';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }

  async getSuscripcion(){
    return await this.http.post("https://api-watu.herokuapp.com/suscrito", {
      email:localStorage.getItem("email")
    }).toPromise();
  }

  
  async suscribirme(token:string): Promise<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.post("https://api-watu.herokuapp.com/pagar/inscripcion/user", { 
    email:localStorage.getItem("email")    ,
    token:token
  }, { headers: httpHeaders }).toPromise();
  }
}
