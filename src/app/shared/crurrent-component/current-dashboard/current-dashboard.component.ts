import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-dashboard',
  templateUrl: './current-dashboard.component.html',
  styleUrls: ['./current-dashboard.component.scss']
})
export class CurrentDashboardComponent {

  @ViewChild('currentForm') currentForm!: NgForm;


  constructor(private loginService: LoginService,
    private _router: Router
  ) { }

  isInAccOpen: boolean = false

  inInButton: boolean = false

  onSubmit(form: NgForm) {

    const sendData = {
      email: form.value.email,
      password: form.value.password,
      userRole: "buyer"
    };

    this.loginService.signup(sendData).subscribe({
      next: () => {
        this._router.navigate(['main-current'])
        Swal.fire({
          title: 'Account Created!',
          text: 'Your account has been successfully registered.',
          icon: 'success'
        });

        form.reset();
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Failed!',
          text: 'Signup failed. Try again.',
          icon: 'error'
        });
      }
    });
  }

  onOpenForm() {
    this.isInAccOpen = true
    this.inInButton = true
  }
}
