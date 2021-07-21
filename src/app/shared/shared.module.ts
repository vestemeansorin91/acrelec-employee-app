import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FullNamePipe } from './pipes/fullName.pipe';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    ConfirmDialogComponent,

    FullNamePipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ConfirmDialogComponent, FullNamePipe, SearchPipe]
})
export class SharedModule { }
