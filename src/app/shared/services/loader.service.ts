import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private loaderSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  loadingObs: Observable<boolean> = this.loaderSub$.asObservable()

  loading(status: boolean) {
    this.loaderSub$.next(status)
  }

}
