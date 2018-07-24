import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../models/Login';

const helper = new JwtHelperService();

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;

    constructor(private _http: HttpClient) {
        const headers = { headers: new HttpHeaders({'Content-type' : 'application/json'}) };
    }

    login(model: Login) {
    return this._http.post<any>(this.baseUrl + 'login', model, this.requestOptions())
        .pipe(
            map(user => {
                console.log(user);
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    this.userToken = user.tokenString;
                }
            }),
            catchError(this.handleError)
          );
    }

    register(model: any) {
        return this._http.post(this.baseUrl + 'register', model, this.requestOptions())
        .pipe(
            catchError(this.handleError)
        );
    }

    loggedIn() {
        const refreshToken = localStorage.getItem('token');
        return !helper.isTokenExpired(refreshToken);
    }

    private requestOptions() {
        return { headers: new HttpHeaders({'Content-type' : 'application/json'}) };
    }

    private handleError(error: any) {
      const applicationError = error.headers.get('Application-Error');
      if (applicationError) {
        return observableThrowError(applicationError);
      }
      const serverError = error.statusText;
      let modelStateErrors = '';
      if (serverError) {
          for (const key in serverError) {
              if (serverError[key]) {
                  modelStateErrors += serverError[key] + '\n';
              }
          }
      }
      return observableThrowError(
          modelStateErrors || 'Server error'
      );
    }
}
