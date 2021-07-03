import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyprogramsService {

  constructor(private http: HttpClient) { }

  private _apiUrl = environment.apiUrl;

  async getMyPrograms(): Promise<any> {
    const url = `https://api-watu.herokuapp.com/vacantes/${localStorage.getItem("userId")}`
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }
}
