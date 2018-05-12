import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
    providedIn: 'root'
})
export class FileService   {
    baseUrl = 'http://localhost:5000/api/file/';
    headers: any

    constructor(private _http: HttpClient) {
        this.headers = { headers: new HttpHeaders({'Content-type' : 'application/pdf'}) };
    }

    private requestOptions() {
        return { headers: new HttpHeaders({'Content-type' : 'application/pdf'}) };
    }


    generatePdf() {
        const token = localStorage.getItem('token');
        let decodedToken = helper.decodeToken(token);
        window.open("http://localhost:5000/api/file/" + decodedToken.nameid, '_black');
    }
}
