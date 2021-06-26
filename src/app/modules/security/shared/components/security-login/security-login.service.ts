import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SecurityLoginService {
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/iniciar-sesion`, {
        email,
        password,
      })
      .pipe(
        tap((jwt) => {
          localStorage.setItem('token', jwt.toString());
          this.router.navigateByUrl("user/programs/50")
        }),
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          return of(err.error.mensaje);
        })
      );
  }
}
