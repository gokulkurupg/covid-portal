import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'spinner',
  template: `<mat-spinner></mat-spinner>`,
})
export class SpinnerComponent {
  constructor(public dialogRef: MatDialogRef<SpinnerComponent>) {}
}
