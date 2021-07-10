import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from 'src/app/modules/user/pages/programs/interfaces/programas.interface';
import { environment } from 'src/environments/environment';
import { BodyCreateSede } from './interfaces/sedes.interface';

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

    async createSede(bodyCreateProgram: BodyCreateSede): Promise<void> {
        let idUser = 1;
        const url = 'https://api-watu.herokuapp.com/sede/crear/' + idUser;
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        await this.http.post(url, bodyCreateProgram, { headers: httpHeaders }).toPromise();
    }

    async deleteSede(sede: Number): Promise<void> {
        const url = 'https://api-watu.herokuapp.com/sede/' + sede;
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        await this.http.delete(url).toPromise();
    }


    async editarSede(sedeId: number, data: any): Promise<any> {
        const url = 'https://api-watu.herokuapp.com/sede/editar/' + sedeId;
        const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        return await this.http.put(url, data, { headers: httpHeaders }).toPromise();
    }

}
