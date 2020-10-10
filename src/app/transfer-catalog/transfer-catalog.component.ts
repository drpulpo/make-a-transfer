import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transfer-catalog',
  templateUrl: './transfer-catalog.component.html',
  styleUrls: ['./transfer-catalog.component.css'],
})
export class TransferCatalogComponent implements OnInit {
  filter = '';
  @Input() transfers: any[];
  @Input() dateSortChar = '';
  @Input() beneficiarySortChar = '';
  @Input() amountSortChar = '';
  @Output() filterChanged = new EventEmitter();
  @Output() dateSortPressed = new EventEmitter();
  @Output() beneficiarySortPressed = new EventEmitter();
  @Output() amountSortPressed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFilterChanged(value) {
    this.filterChanged.emit(value);
  }

  onClearFilter() {
    this.filter = '';
    this.filterChanged.emit('');
  }

  onDateSortPressed(value) {
    this.dateSortPressed.emit(value);
  }

  onBeneficiarySortPressed(value) {
    this.beneficiarySortPressed.emit(value);
  }

  onAmountSortPressed(value) {
    this.amountSortPressed.emit(value);
  }
}
