import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-login2-main',
  templateUrl: './login2-main.component.html',
  styleUrls: ['./login2-main.component.scss']
})
export class Login2MainComponent implements OnInit {

  @ViewChild('loginForm') loginForm!: NgForm;

  loginData = {
    email: '',
    password: ''
  };

  otpIs!: string;
  otpValidation: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _matDailog: MatDialog
  ) { }

  ngOnInit(): void { }

  loginUser() {
    this.loginService.login(this.loginData).subscribe({
      next: (res) => {

        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/main']);
        });

      },
      error: (err) => {

        console.log('Login Failed', err);

        Swal.fire({
          title: 'Error!',
          text: 'Login Failed',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });

      }
    });
  }

  generateOtp() {
    const generateOTP = (length = 6) => {
      let otp = '';
      for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
      }
      return otp;
    };

    this.otpIs = generateOTP();
    this.otpValidation = true;
    console.log('Generated OTP:', this.otpIs);
  }

  onCancel() {
    let dailog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this.router.navigate([""])
      }
    })
  }

}
