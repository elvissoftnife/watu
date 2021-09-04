import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    
  }

  enviar(data:any):Promise<any>{
    return  this.http.post("https://api-watu.herokuapp.com/contactanos",data).toPromise()
  }
}
