import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @ViewChild('confirmDialogRef', { static: false }) modal: ElementRef | undefined;
  @Output() confirm = new EventEmitter<void>();
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
