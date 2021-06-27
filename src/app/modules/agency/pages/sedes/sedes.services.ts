import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from 'src/app/modules/user/pages/programs/interfaces/programas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SedesService {

    programsJson: {
        sedes: Sede[]
    } = { sedes: [] };

    private _sedes: Sede[] = [];

    get sedes(): Sede[] {
        return [...this._sedes];
    }

    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    async LoadSedes(): Promise<void> {
        let idUser = 1;
        const url = 'https://api-watu.herokuapp.com/sedes/' + idUser;
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.programsJson = await this.http.get<any>(url, { headers: httpHeaders }).toPromise();
        this._sedes = this.programsJson.sedes;
    }

}
