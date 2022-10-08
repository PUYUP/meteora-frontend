import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spread-editor-dialog',
  templateUrl: './spread-editor-dialog.component.html',
  styleUrls: ['./spread-editor-dialog.component.css'],
})
export class SpreadEditorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SpreadEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  retrieveSpreadEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
