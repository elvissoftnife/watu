import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  updateUserProfile(request: any, userId: string): Observable<any> {
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
}
