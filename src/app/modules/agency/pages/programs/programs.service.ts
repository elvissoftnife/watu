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
    const url = this.apiUrl + '/listar-programas';
    //const url = 'https://gist.githubusercontent.com/Mantarraya/7491fcf97597d94dcf363f71a2e0e07d/raw/3429de90182276d9d25aced3c2ea43ca0094bd45/json';
    console.log(url);
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.get(url, { headers: httpHeaders }).toPromise();
  }
}
