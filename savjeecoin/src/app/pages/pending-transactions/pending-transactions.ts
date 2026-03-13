import { Component,OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain';
import { TransactionsTableComponents } from '../../components/transactions-table/transactions-table';

@Component({
  selector: 'app-pending-transactions',
  imports: [TransactionsTableComponents],
  templateUrl: './pending-transactions.html',
  styleUrl: './pending-transactions.css',
})
export class PendingTransactions implements OnInit{
  public pendingTransactions:any=[];

  constructor(private blockchainService: BlockchainService){
  }
  ngOnInit(){
    this.refreshPendingTransactions();
  }
  
  refreshPendingTransactions(){
    this.pendingTransactions = this.blockchainService.getPendingTransactions();
  }
  
  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
    setTimeout(() => {
      this.refreshPendingTransactions();
    }, 100);
  }
}
