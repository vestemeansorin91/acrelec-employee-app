import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FullNamePipe } from './pipes/fullName.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // components
    ModalComponent,
    ConfirmDialogComponent,

    // pipes
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, ConfirmDialogComponent, FullNamePipe]
})
export class SharedModule { }
