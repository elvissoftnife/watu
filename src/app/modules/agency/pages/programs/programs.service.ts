import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BodyCreateProgram } from './interfaces/programas.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  programs: any;

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    let idUser = 1;
    const url = 'https://api-watu.herokuapp.com/programas/agencia/' + idUser;
    //const url = 'https://gist.githubusercontent.com/SinNick7/5cc1438f3b7edd6e236b3358e59e5b08/raw/16788302c8abbd79bc85474f0d05095f633836f3/test';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }

  async createProgram(bodyCreateProgram: BodyCreateProgram): Promise<any> {
    let idUser = 1;
    const url = 'https://api-watu.herokuapp.com/programa/crear/' + idUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.post(url, bodyCreateProgram,  { headers: httpHeaders }).toPromise();
  }
}
