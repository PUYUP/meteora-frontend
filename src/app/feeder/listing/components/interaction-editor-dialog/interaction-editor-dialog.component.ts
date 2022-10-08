import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-interaction-editor-dialog',
  templateUrl: './interaction-editor-dialog.component.html',
  styleUrls: ['./interaction-editor-dialog.component.css'],
})
export class InteractionEditorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InteractionEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receiveInteractionEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
