import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

export interface Transaction {
  orderId: string;
  billingName: string;
  date: Date;
  total: number;
  paymentStatus: string;
  paymentMethod: string;
}

const TRANSACTIONS: Transaction[] = [
  {
    orderId: 'SK2540',
    billingName: 'Neal Matthews',
    date: new Date(2019, 10, 7),
    total: 400,
    paymentStatus: 'Paid',
    paymentMethod: 'Mastercard',
  },
  {
    orderId: 'SK2541',
    billingName: 'Jamal Burnett',
    date: new Date(2019, 10, 7),
    total: 380,
    paymentStatus: 'Chargeback',
    paymentMethod: 'Visa',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'select',
    'orderId',
    'billingName',
    'date',
    'total',
    'paymentStatus',
    'paymentMethod',
    'action',
  ];
  dataSource = TRANSACTIONS;
  selection = new SelectionModel<Transaction>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Transaction): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }
  getPaymentColor(payment: string): string {
    if (payment === 'Paid') return 'primary';
    else if (payment === 'Refund') return 'accent';
    return 'warn';
  }
  getPaymentIcon(paymentMethod: string): string {
    if (paymentMethod === 'Visa') return 'primary';
    else if (paymentMethod === 'Mastercard') return 'accent';
    return 'warn';
  }
  
  constructor() {}

  ngOnInit(): void {}
}
