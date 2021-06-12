import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment}/iniciar-sesion`, {
        email,
        password,
      })
      .pipe(
        tap((jwt) => {
          localStorage.setItem('token', jwt.toString());
        }),
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          return of(err.error.mensaje);
        })
      );
  }
}
