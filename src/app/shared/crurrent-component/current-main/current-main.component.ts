import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-main',
  templateUrl: './current-main.component.html',
  styleUrls: ['./current-main.component.scss']
})
export class CurrentMainComponent implements OnInit {

  refId!: string | null;

  ngOnInit(): void {
    this.refId = localStorage.getItem('savingRefId');
  }

}
