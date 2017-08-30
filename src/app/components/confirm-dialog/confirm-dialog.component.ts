import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'stream-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  data: any

  constructor(@Inject(MD_DIALOG_DATA) data: { data: any }) {
    this.data = data;
  }

  ngOnInit() {
  }

}
