import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  accountForm!: FormGroup;
  otp!: number;
  isOtpValid: boolean = false;
  step: number = 1;
  serverError: string = '';

  constructor(private loginService: LoginService,
    private _matDailog: MatDialog,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.accountForm = new FormGroup({

      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      userRole: new FormControl(null, [Validators.required]),

      aadhar: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{12}$')]),
      pan: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]),
      mobile: new FormControl(null, [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
      otp: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{6}$')]),

      currentCity: new FormControl(null, Validators.required),
      currentPincode: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      currentState: new FormControl(null, Validators.required),
      currentCountry: new FormControl('India', Validators.required),

      permanentCity: new FormControl(null, Validators.required),
      permanentPincode: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      permanentState: new FormControl(null, Validators.required),
      permanentCountry: new FormControl('India', Validators.required),

      sameAsCurrent: new FormControl(false)
    });
  }

  goToStep2() {
    if (this.accountForm.get('email')?.invalid ||
      this.accountForm.get('password')?.invalid) {

      Swal.fire({
        title: 'Invalid Details',
        text: 'Please enter valid email and password',
        icon: 'warning'
      });
      return;
    }
    this.step = 2;
  }

  goToStep3() {
    if (!this.isKycValid()) {
      Swal.fire({
        title: 'KYC Incomplete',
        text: 'Fill Aadhaar, PAN, Mobile and OTP correctly',
        icon: 'warning'
      });
      return;
    }
    this.step = 3;
  }

  onOtp() {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    this.otp = generatedOtp;
    this.isOtpValid = true;
    this.accountForm.patchValue({ otp: generatedOtp });

    Swal.fire({
      title: 'OTP Sent!',
      text: `Your OTP is: ${generatedOtp}`,
      icon: 'info'
    });
  }

  isKycValid(): boolean {
    return !!(
      this.accountForm.get('aadhar')?.valid &&
      this.accountForm.get('pan')?.valid &&
      this.accountForm.get('mobile')?.valid &&
      this.accountForm.get('otp')?.valid &&
      this.isOtpValid
    );
  }

  copyAddress(event: any) {
    if (event.target.checked) {
      this.accountForm.patchValue({
        permanentCity: this.accountForm.get('currentCity')?.value,
        permanentPincode: this.accountForm.get('currentPincode')?.value,
        permanentState: this.accountForm.get('currentState')?.value,
        permanentCountry: this.accountForm.get('currentCountry')?.value
      });
    } else {
      this.accountForm.patchValue({
        permanentCity: null,
        permanentPincode: null,
        permanentState: null,
        permanentCountry: 'India'
      });
    }
  }
  submitForm() {

    const sendData = {
      email: this.accountForm.get('email')?.value,
      password: this.accountForm.get('password')?.value,
      userRole: this.accountForm.get('userRole')?.value
    };

    this.loginService.signup(sendData).subscribe({
      next: (res) => {
        this._router.navigate(['/login-main'])
        Swal.fire({
          title: 'Account Created!',
          text: 'Your account has been successfully registered.',
          icon: 'success'
        });

        console.log('Stored:', res);
      },
      error: (err) => {

        Swal.fire({
          title: 'Signup Failed!',
          text: err?.error?.message || 'Signup failed. Try again.',
          icon: 'error'
        });

        console.log('Error:', err);
      }
    });
  }

  onClose() {
    let dailog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this._router.navigate([""])
      }
    })
  }

}
