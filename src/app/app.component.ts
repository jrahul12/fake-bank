import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'users';

  isLoading!: boolean

  constructor(private _ser: LoginService,
    private _loader: LoaderService
  ) { }

  ngOnInit(): void {
    this._ser.fetchAll().subscribe(res => {
      console.log(res);

    })
    this._loader.loadingObs.subscribe(res => {
      this.isLoading = res
    })
  }

}
