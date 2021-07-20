import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
