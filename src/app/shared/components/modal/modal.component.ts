import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild('myModal', { static: false }) modal: ElementRef | undefined;

  open() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
    }
  }

  close() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
    }
  }

}
