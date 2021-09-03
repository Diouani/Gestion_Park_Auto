import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BackdropClickDialogComponent } from './backdrop-dialog.component';

@Component({
  selector: 'nb-dialog-backdrop-click',
  template: `
    <nb-icon
      [options]="{ animation: { type: 'pulse' } }"
      (click)="openWithoutBackdropClick()"
      icon="plus"
      style="cursor: pointer; color: green "
    ></nb-icon>
    <a href="" style="text-decoration: none"><i class="nb-plus-circled"></i></a>
  `,
  styleUrls: ['./modal.component.scss'],
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
