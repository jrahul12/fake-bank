import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransaction } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = environment.BASE_URL

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<ITransaction[]> {
    return this._http.get<ITransaction[]>(this.BASE_URL)
  }
}
