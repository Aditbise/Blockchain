import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainService } from '../../services/blockchain';
import { BlockViewComponents } from '../../components/block-view/block-view';
import { TransactionsTableComponents } from '../../components/transactions-table/transactions-table';

@Component({
  selector: 'app-blockchain-viewer',
  imports: [CommonModule, BlockViewComponents, TransactionsTableComponents],
  templateUrl: './blockchain-viewer.html',
  styleUrl: './blockchain-viewer.css',
})
export class BlockchainViewerComponents implements OnInit {
  public blocks: any[] = [];
  public selectedBlock: any = null;

  constructor(private blockchainService: BlockchainService){
  }

  ngOnInit(){
    this.blocks = this.blockchainService.getBlocks();
    if (this.blocks && this.blocks.length > 0) {
      // Select the first block with actual transactions (not genesis block)
      const blockWithTransactions = this.blocks.find(b => Array.isArray(b.data) && b.data.length > 0);
      this.selectedBlock = blockWithTransactions || this.blocks[0];
    }
  }

  showTransactions(block: any) {
    this.selectedBlock = block;
  }


  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
}
