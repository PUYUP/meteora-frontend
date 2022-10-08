import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-editor-modal',
  templateUrl: './product-editor-modal.component.html',
  styleUrls: ['./product-editor-modal.component.css'],
})
export class ProductEditorModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  receiveProductEditorEvent(event: any): void {
    if (event?.action == 'cancel') {
      this.dialogRef.close();
    }
  }
}
