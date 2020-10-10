import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal: ElementRef;
  @Input() newTransfer;
  @Output() newTransferAccepted = new EventEmitter();
  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  accept() {
    this.newTransferAccepted.emit({});
    this.modal.nativeElement.style.display = 'none';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  constructor() {}

  ngOnInit(): void {}
}
