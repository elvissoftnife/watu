import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SecurityLoginService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  async login(email: string, password: string): Promise<any> {

    const url = this.apiUrl + '/iniciar-sesion';
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return await this.http.post(url, {
      email,
      password,
    }, { headers: httpHeaders }).toPromise();
  }
}
