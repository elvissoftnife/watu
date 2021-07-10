import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgencyProfileService {
  constructor(private http: HttpClient) {}

  updateAgencyProfile(request: any, userId: string): Observable<any> {
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

  sendEmailToRecoverPassword(email: String) {
    return this.http
      .post(`${environment.apiUrl}/reset/password`, {
        email,
      })
      .pipe(
        tap((val) => val),
        catchError((error) => {
          console.log('error', error);
          return of(false);
        })
      );
  }

  getAgencyProfile(agencyId: number) {
    return this.http
      .get(`${environment.apiUrl}/agencia/perfil/${agencyId}`)
      .pipe(
        tap((val: any) => {
          console.log(val);
        }),
        map((datos:any) => datos),
        catchError((_) => {
          return of(false);
        })
      );
  }
}
