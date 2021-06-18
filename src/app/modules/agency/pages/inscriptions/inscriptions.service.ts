import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    const url = this.apiUrl + '/listar-inscripciones';
    console.log(url);
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }
}
