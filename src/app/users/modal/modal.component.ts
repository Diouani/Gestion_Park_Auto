import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BackdropClickDialogComponent } from './backdrop-dialog.component';

@Component({
  selector: 'nb-dialog-backdrop-click',
  template: `
    <button
      class="btn btn-success"
      nbButton
      (click)="openWithoutBackdropClick()"
    >
      Add User
    </button>
   
  `,
  // styleUrls: ['./dialog-common.scss'],
})
export class DialogBackdropClickComponent {
  constructor(private dialogService: NbDialogService) {}

  openWithBackdropClick() {
    this.open(true);
  }

  openWithoutBackdropClick() {
    this.open(false);
  }

  protected open(closeOnBackdropClick: boolean) {
    this.dialogService.open(BackdropClickDialogComponent, {
      closeOnBackdropClick,
    });
  }
}
