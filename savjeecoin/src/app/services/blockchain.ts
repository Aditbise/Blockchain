import { Injectable } from '@angular/core';
// @ts-ignore - blockchain.js is plain JavaScript
import { Blockchain, Transaction } from '../../../../src/blockchain';
import EC from "elliptic";
// @ts-ignore - crypto-js has no type declarations
import SHA256 from 'crypto-js/sha256';

interface WalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  public blockchainInstance=new Blockchain();
  public walletKeys: WalletKey[]=[];
  constructor() {
    this.blockchainInstance.difficulty=1;
    
    this.generateWalletKeys();
    
    this.addSampleTransactions();
    
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
  }

  private addSampleTransactions() {
    try {
      if (this.walletKeys.length > 0) {
        const wallet = this.walletKeys[0];
        
        const tx1 = new Transaction(wallet.publicKey, 'recipient-address-1', 50);
        tx1.timestamp = new Date().getTime() - 5000; 
        tx1.signTransaction(wallet.keyObj);
        this.blockchainInstance.addTransaction(tx1);
        
        const tx2 = new Transaction(wallet.publicKey, 'recipient-address-2', 75);
        tx2.timestamp = new Date().getTime() - 3000;
        tx2.signTransaction(wallet.keyObj);
        this.blockchainInstance.addTransaction(tx2);
        
        const tx3 = new Transaction(wallet.publicKey, 'recipient-address-3', 25);
        tx3.timestamp = new Date().getTime() - 1000; 
        tx3.signTransaction(wallet.keyObj);
        this.blockchainInstance.addTransaction(tx3);
      }
    } catch (error) {
      console.error('Error adding sample transactions:', error);
    }
  }

  getBlocks(){
    return this.blockchainInstance.chain.map((block: any, index: number) => {
      return {
        ...block,
        index: index,
        isValid: this.isBlockValid(block, index)
      };
    });
  }

  private isBlockValid(block: any, index: number): boolean {
    try {
      if (index === 0) {
        return true;
      }
      
      if (!block.previousHash) {
        return false;
      }
      
      if (Array.isArray(block.data) && block.data.length > 0) {
        if (block.hasValidTransactions && typeof block.hasValidTransactions === 'function') {
          return block.hasValidTransactions();
        }
      }
      
      return !!block.hash;
    } catch (error) {
      console.error('Error validating block:', error);
      return false;
    }
  }

  addTransaction(tx:any){
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    )
  }

  validateTransaction(tx: any): boolean {
    try {
      // Reward transactions (fromAddress is null) are always valid
      if (tx.fromAddress === null) return true;

      // Must have a signature
      if (!tx.signature || tx.signature.length === 0) return false;

      // Verify the signature using the same method as blockchain.js
      const ec = new EC.ec('secp256k1');
      const publicKey = ec.keyFromPublic(tx.fromAddress, 'hex');
      
      // Calculate the hash
      const hashTx = SHA256(tx.fromAddress + tx.toAddress + tx.amount).toString();
      
      // Verify the signature
      return publicKey.verify(hashTx, tx.signature);
    } catch (error) {
      console.error('Error validating transaction:', error);
      return false;
    }
  }

  private generateWalletKeys(){
    const ec=new EC.ec('secp256k1');
    const key=ec.genKeyPair();
    
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'), 
    });
  }
}
