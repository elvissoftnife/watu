import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/iniciar-sesion`, {
        email,
        password,
      })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token.toString());
          localStorage.setItem('idUser', resp.usuario.id);
        }),
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          return of(err.error.mensaje);
        })
      );
  }

  update(request: any, userId: string) {
    return this.http.put(`${environment.apiUrl}/user/${userId}`, request).pipe(
      tap((val: any) => {
        console.log(val);
      }),
      map((_) => true),
      catchError((_) => {
        return of(false);
      })
    );
  }

  register(request: any) {
    return this.http.post(`${environment.apiUrl}/crear-cuenta`, request).pipe(
      tap((val: any) => {
        console.log(val);
      }),
      map(() => true),
      catchError((_) => {
        return of(false);
      })
    );
  }

  getProgram(id: String): Observable<any> {
    return this.http.get(`${environment.apiUrl}/programas/${id}`);
  }
}
