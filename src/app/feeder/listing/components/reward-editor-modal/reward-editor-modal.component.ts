import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reward-editor-modal',
  templateUrl: './reward-editor-modal.component.html',
  styleUrls: ['./reward-editor-modal.component.css'],
})
export class RewardEditorModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RewardEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receiveRewardEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
