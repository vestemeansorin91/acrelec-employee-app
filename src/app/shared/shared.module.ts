import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    ConfirmDialogComponent
  ],
  exports: [ModalComponent, ConfirmDialogComponent]
})
export class SharedModule { }
