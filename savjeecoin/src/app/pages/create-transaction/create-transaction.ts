import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockchainService } from '../../services/blockchain';
// @ts-ignore - blockchain.js is plain JavaScript
import { Transaction } from '../../../../../src/blockchain';

@Component({
  selector: 'app-create-transaction',
  imports: [FormsModule],
  templateUrl: './create-transaction.html',
  styleUrl: './create-transaction.css',
})
export class CreateTransaction implements OnInit{
  public newTx: any;
  public walletKey: any;
  constructor(private blockchainService: BlockchainService){
    this.walletKey=blockchainService.walletKeys[0];
  }
  ngOnInit(){
    this.newTx=new Transaction();
  }
  createTransaction(){
    this.newTx.fromAddress=this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

   this.newTx=new Transaction(); 
  }
}
