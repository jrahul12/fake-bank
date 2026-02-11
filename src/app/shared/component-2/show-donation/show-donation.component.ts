import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-show-donation',
  templateUrl: './show-donation.component.html',
  styleUrls: ['./show-donation.component.scss']
})
export class ShowDonationComponent implements OnInit {

  constructor(private _service: DonationService) { }
  donationArr: any[] = []
  ngOnInit(): void {
    this._service.fetchAll().subscribe(res => {
      this.donationArr = res
    })
  }

}
