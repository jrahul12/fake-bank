import { Component, OnInit } from '@angular/core';
import { Login2Service } from '../../services/login-2.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  constructor(private _service: Login2Service) { }
  ngOnInit(): void {
  }

}
