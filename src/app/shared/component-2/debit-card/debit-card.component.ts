import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {

  step = 1;
  form!: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      accountNo: ['', [Validators.required, Validators.pattern('^[0-9]{10,16}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  nextStep() {

    if (this.step === 1) {
      if (this.form.controls['fullName'].invalid ||
        this.form.controls['accountNo'].invalid ||
        this.form.controls['mobile'].invalid ||
        this.form.controls['email'].invalid) {

        this.form.markAllAsTouched();
        return;
      }
    }

    if (this.step === 2) {
      if (this.form.controls['otp'].invalid) {
        this.form.controls['otp'].markAsTouched();
        return;
      }
    }

    if (this.step < 4) {
      this.step++;
    }
  }


  prevStep() {
    if (this.step > 1) this.step--;
  }

  onApply() {
    this._router.navigate(['/']);
    Swal.fire({
      title: "Applied For Debit Card!",
      icon: "success",
      draggable: true
    });
  }
}
