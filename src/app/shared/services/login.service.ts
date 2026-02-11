import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SIGNUP_URL = environment.SIGNUP_URL;
  LOGIN_URL = environment.LOGIN_URL;

  constructor(private _http: HttpClient) { }

  signup(data: { email: string; password: string, userRole: string }) {
    return this._http.post(this.SIGNUP_URL, data);
  }

  login(data: { email: string; password: string }) {
    return this._http.post(this.LOGIN_URL, data);
  }

  fetchAll(): Observable<any> {
    return this._http.get<any>(this.LOGIN_URL)
  }

}
