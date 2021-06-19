import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    const url = 'https://api-watu.herokuapp.com/programas/agencia/5';
    //const url = 'https://gist.githubusercontent.com/SinNick7/5cc1438f3b7edd6e236b3358e59e5b08/raw/16788302c8abbd79bc85474f0d05095f633836f3/test';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }
}
