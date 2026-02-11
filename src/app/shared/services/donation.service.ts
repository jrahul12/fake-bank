import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  BASE_URL: string = environment.DONATION_URL

  DONATION_URL: string = `${this.BASE_URL}/donation.json`

  constructor(private _http: HttpClient) { }

  private donSub$: Subject<any[]> = new Subject<any>()

  donObs: Observable<any[]> = this.donSub$.asObservable()

  donSub(don: any[]) {
    this.donSub$.next(don)
  }

  fetchAll(): Observable<any[]> {
    return this._http.get<any[]>(this.DONATION_URL).pipe(
      map((obj: any) => {
        let donArr: any[] = [];
        for (const key in obj) {
          donArr.push({
            ...obj[key],
            id: key
          });
        }
        return donArr
      })
    )
  }

  addDonation(donation: any): Observable<any> {
    return this._http.post(this.DONATION_URL, donation);
  }


}
