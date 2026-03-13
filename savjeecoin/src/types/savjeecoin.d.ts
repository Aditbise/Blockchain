declare module 'savjeecoin/src/blockchain' {
  export class Blockchain {
    constructor();
    chain: Block[];
    pendingTransactions: Transaction[];
    difficulty: number;
    miningReward: number;
    addBlock(data: any): void;
    getLatestBlock(): Block;
    getChain(): Block[];
    addTransaction(transaction: Transaction): void;
    minePendingTransactions(minerAddress: string): void;
    getBalance(address: string): number;
    isChainValid(): boolean;
  }

  export class Block {
    constructor(timestamp: number, data: any, previousHash?: string);
    timestamp: number;
    data: any;
    previousHash: string;
    hash: string;
    nonce: number;
    calculateHash(): string;
    mineBlock(difficulty: number): void;
  }

  export class Transaction {
    constructor(fromAddress: string, toAddress: string, amount: number);
    fromAddress: string;
    toAddress: string;
    amount: number;
    signature: string;
    calculateHash(): string;
    signTransaction(signingKey: any): void;
    isValid(): boolean;
  }
}
