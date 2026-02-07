import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private _dailogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }

  onClose(flag: boolean) {
    this._dailogRef.close(flag)
  }

}
