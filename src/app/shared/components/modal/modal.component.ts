import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modalRef', { static: false }) modal: ElementRef | undefined;
  public data: any = null;

  open(data: any) {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
    }
    this.data = data || null;
  }

  close() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
    }
  }

}
