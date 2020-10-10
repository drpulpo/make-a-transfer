export interface Datetype {
  valueDate: string;
}

export interface AmountCurrency {
  amount: number;
  currencyCode: string;
}

export interface Transaction {
  amountCurrency: {
    [key: string]: AmountCurrency;
  };
  type: string;
  creditDebitIndicator: string;
}

export interface Merchant {
  name: string;
  accountNumber: string;
}

export interface Transfer {
  categoryCode: string;
  dates: {
    [key: string]: Datetype;
  };
  transaction: {
    [key: string]: Transaction;
  };
  merchant: {
    [key: string]: Merchant;
  };
}
