import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  @ViewChild('donationForm') donationForm!: NgForm

  isForm: boolean = false

  constructor(private _service: DonationService) { }

  ngOnInit(): void {
    this._service.fetchAll().subscribe(res => {
      console.log(res);

    })
  }
  onForm() {
    if (this.donationForm.valid) {

      const createObj = {
        ...this.donationForm.value,
        createdAt: new Date()
      };

      this._service.addDonation(createObj).subscribe({
        next: (res: any) => {

          console.log("Firebase generated ID:", res.name);

          const finalObj = {
            ...createObj,
            id: res.name
          };

          console.log("Final object:", finalObj);
          Swal.fire({
            title: "Thank You For Donating!",
            icon: "success",
            draggable: true
          });
          this.donationForm.reset();
          this.isForm = false;
        },
        error: (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
        }
      });
    }
  }



  onShow() {
    this.isForm = true
  }

}
