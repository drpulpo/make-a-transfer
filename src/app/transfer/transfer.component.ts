import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  @Input() balance: number;
  @Input() balanceText: string;
  toAccount = '';
  amount: number;

  @Output() newTransferEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clear() {
    this.toAccount = '';
    this.amount = null;
  }

  addNewTransfer() {
    if (this.amount > 0 && this.balance - this.amount > -500) {
      const d = new Date();
      let value = {
        categoryCode: '#12a580',
        dates: {
          valueDate: d.getTime(),
        },
        transaction: {
          amountCurrency: {
            amount: this.amount,
            currencyCode: 'EUR',
          },
          type: 'Online Transfer',
          creditDebitIndicator: 'DBIT',
        },
        merchant: {
          name: this.toAccount,
          accountNumber: 'SI64397745065188826',
        },
      };
      this.newTransferEvent.emit(value);
    }
  }
}
