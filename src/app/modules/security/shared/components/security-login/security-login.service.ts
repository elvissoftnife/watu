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
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/iniciar-sesion`, {
        email,
        password,
      })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token.toString());
          console.log(resp.usuario);
          const userProfile = {
            id: resp.usuario.id,
            name: resp.usuario.nombre,
            lastName: resp.usuario.apellido_paterno,
            lastNameMother: resp.usuario.apellido_materno,
          };

          localStorage.setItem('user', JSON.stringify(userProfile));
          this.router.navigateByUrl('user/programs/50');
        }),
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          return of(err.error.mensaje);
        })
      );
  }
}
