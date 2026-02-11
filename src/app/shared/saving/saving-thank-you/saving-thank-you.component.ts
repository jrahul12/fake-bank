import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving-thank-you',
  templateUrl: './saving-thank-you.component.html',
  styleUrls: ['./saving-thank-you.component.scss']
})
export class SavingThankYouComponent implements OnInit {


  refId!: string | null;

  ngOnInit(): void {
    this.refId = localStorage.getItem('savingRefId');
  }
}
