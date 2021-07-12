import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncriptionsProgramService {

  constructor(private http: HttpClient) { }

  private _apiUrl = environment.apiUrl;

  async getMyPrograms(id:number=0): Promise<any> {
    const response = await fetch(`https://api-watu.herokuapp.com/user/inscritos/${id}`,{
        method: 'GET',
        mode:'cors',
        cache: 'no-cache'});
        return response.json();
  }
}