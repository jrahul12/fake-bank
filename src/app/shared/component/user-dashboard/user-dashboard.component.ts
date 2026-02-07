import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ITransaction } from '../../model/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  bankArr: ITransaction[] = []

  searchVal:string=''

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.fetchAll().subscribe({
      next: data => {
        this.bankArr = data
      }
    })
  }

}
