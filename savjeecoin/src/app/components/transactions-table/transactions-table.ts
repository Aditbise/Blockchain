import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { BlockchainService } from '../../services/blockchain';

@Component({
  selector: 'app-transactions-table',
  imports: [CommonModule, SlicePipe],
  templateUrl: './transactions-table.html',
  styleUrl: './transactions-table.css',
})
export class TransactionsTableComponents implements OnInit, OnChanges {
  @Input() public transactions: any[] = [];
  public processedTransactions: any[] = [];
  
  constructor(private blockchainService: BlockchainService) {}
  
  ngOnInit() {
    this.processTransactions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['transactions']) {
      this.processTransactions();
    }
  }

  private processTransactions() {
    if (Array.isArray(this.transactions)) {
      this.processedTransactions = this.transactions.map(tx => ({
        fromAddress: tx.fromAddress || null,
        toAddress: tx.toAddress || '',
        amount: tx.amount || 0,
        timestamp: tx.timestamp || null,
        signature: tx.signature || '',
        isValid: () => this.blockchainService.validateTransaction(tx)
      }));
    }
  }

  isArray(obj: any): obj is any[] {
    return Array.isArray(obj);
  }
}
