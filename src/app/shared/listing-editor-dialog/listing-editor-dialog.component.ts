import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listing-editor-dialog',
  templateUrl: './listing-editor-dialog.component.html',
  styleUrls: ['./listing-editor-dialog.component.css'],
})
export class ListingEditorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ListingEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receiveListingEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
