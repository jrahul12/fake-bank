import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving-dashboard',
  templateUrl: './saving-dashboard.component.html',
  styleUrls: ['./saving-dashboard.component.scss']
})
export class SavingDashboardComponent {

  @ViewChild('savingForm') savingForm!: NgForm;

  constructor(private loginService: LoginService,
    private _router: Router
  ) { }

  isFOrmOpen: boolean = false

  isButton: boolean = false

  onSavingSubmit(form: NgForm) {

    const sendData = {
      email: form.value.email,
      password: form.value.password,
      userRole: "buyer"
    };

    this.loginService.signup(sendData).subscribe({
      next: () => {
        this._router.navigate(['saving-thank'])
        Swal.fire({
          title: 'Savings Account Created!',
          text: 'Your savings account has been registered successfully.',
          icon: 'success'
        });

        form.reset();
      },
      error: (err) => {
        console.error(err);

        Swal.fire({
          title: 'Failed!',
          text: 'Signup failed. Try again.',
          icon: 'error'
        });
      }
    });
  }

  onOpenForm() {
    this.isFOrmOpen = true
    this.isButton = true
  }
}
