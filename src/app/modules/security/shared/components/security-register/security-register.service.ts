import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecurityRegisterService {
  constructor(private http: HttpClient) {}

  register(request: any): Observable<any> {
    return this.http
      .post(`${environment.apiUrl + '/crear-cuenta'}`, request)
      .pipe(
        tap((resp) => console.log('rep', resp)),
        map(() => true),
        catchError((err) => {
          return of(false);
        })
      );
  }

  recoverPassword(email: string) {
    return this.http
      .post('https://api-watu.herokuapp.com/reset/password', {
        email: email,
      })
      .pipe(
        tap(console.log),
        map((_) => true),
        catchError((err) => of(false))
      );
  }
}
