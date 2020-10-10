import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferComponent } from '../transfer/transfer.component';
import { ModalComponent } from '../modal/modal.component';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  transfers: any[] = [];
  transfersInView: any[] = [];
  balance = 5824.76;
  balanceText = '';
  orderBy = 'DATE';
  orderWay = 'DESC';
  dateSortChar = '▲';
  beneficiarySortChar = '▲';
  amountSortChar = '▲';
  filter = '';
  newTransfer = {
    transaction: {
      amountCurrency: {
        amount: 0,
      },
    },
    merchant: {
      name: '',
    },
  };
  @ViewChild('modal', { static: false }) modal: ModalComponent;
  @ViewChild('transferCmp') transfer: TransferComponent;

  onNewTransfer($event) {
    this.newTransfer = $event;
    this.modal.open();
  }

  onNewTransferAccepted() {
    this.balance -= this.newTransfer.transaction.amountCurrency.amount;
    this.balanceText = 'Free Checking(4692) - $' + this.balance.toFixed(2);
    this.transfers.push(this.newTransfer);
    this.makeSort();
    this.transfer.clear();
  }

  onFilterChanged($event) {
    this.filter = $event;
    this.makeSort();
  }

  toggleOrderWay() {
    switch (this.orderWay) {
      case 'ASC':
        this.orderWay = 'DESC';
        break;
      case 'DESC':
        this.orderWay = 'ASC';
        break;
    }
  }

  onDateSortPressed() {
    if (this.orderBy === 'DATE') {
      this.toggleOrderWay();
    } else {
      this.orderBy = 'DATE';
    }
    this.makeSort();
  }

  onBeneficiarySortPressed() {
    if (this.orderBy === 'BENEFICIARY') {
      this.toggleOrderWay();
    } else {
      this.orderBy = 'BENEFICIARY';
    }
    this.makeSort();
  }

  onAmountSortPressed() {
    if (this.orderBy === 'AMOUNT') {
      this.toggleOrderWay();
    } else {
      this.orderBy = 'AMOUNT';
    }
    this.makeSort();
  }

  makeSort() {
    switch (this.orderBy) {
      case 'NO_SORTING':
        this.dateSortChar = '';
        this.beneficiarySortChar = '';
        this.amountSortChar = '';
        this.transfersInView = [...this.transfers];
        break;
      case 'DATE':
        if (this.orderWay === 'ASC') {
          this.dateSortChar = '▲';
          this.beneficiarySortChar = '';
          this.amountSortChar = '';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return a.dates.valueDate - b.dates.valueDate;
          });
        }
        if (this.orderWay === 'DESC') {
          this.dateSortChar = '▼';
          this.beneficiarySortChar = '';
          this.amountSortChar = '';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return b.dates.valueDate - a.dates.valueDate;
          });
        }
        break;
      case 'BENEFICIARY':
        if (this.orderWay === 'ASC') {
          this.dateSortChar = '';
          this.beneficiarySortChar = '▲';
          this.amountSortChar = '';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return ('' + a.merchant.name).localeCompare(b.merchant.name);
          });
        }
        if (this.orderWay === 'DESC') {
          this.dateSortChar = '';
          this.beneficiarySortChar = '▼';
          this.amountSortChar = '';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return ('' + b.merchant.name).localeCompare(a.merchant.name);
          });
        }
        break;

      case 'AMOUNT':
        if (this.orderWay === 'ASC') {
          this.dateSortChar = '';
          this.beneficiarySortChar = '';
          this.amountSortChar = '▲';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return (
              a.transaction.amountCurrency.amount -
              b.transaction.amountCurrency.amount
            );
          });
        }
        if (this.orderWay === 'DESC') {
          this.dateSortChar = '';
          this.beneficiarySortChar = '';
          this.amountSortChar = '▼';
          this.transfersInView = [...this.transfers].sort(function (a, b) {
            return (
              b.transaction.amountCurrency.amount -
              a.transaction.amountCurrency.amount
            );
          });
        }
        break;
    }
    this.transfersInView = [...this.transfersInView].filter((x) => {
      return x.merchant.name.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  constructor(private transferService: TransferService) {
    this.transferService.getTransfers().subscribe(
      (data) => {
        Object.assign(this.transfers, (data as any).data);
        this.makeSort();
      },
      (error) => {
        console.log('The client was not able to connect to the server');
      }
    );
  }

  ngOnInit(): void {
    this.balanceText = 'Free Checking(4692) - $' + this.balance.toFixed(2);
  }
}
