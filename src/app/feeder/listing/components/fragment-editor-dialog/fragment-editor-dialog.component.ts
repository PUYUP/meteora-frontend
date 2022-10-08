import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fragment-editor-dialog',
  templateUrl: './fragment-editor-dialog.component.html',
  styleUrls: ['./fragment-editor-dialog.component.css'],
})
export class FragmentEditorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FragmentEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receiveFragmentEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
