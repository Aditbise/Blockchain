const {Blockchain,Transaction}=require('./blockchain');
const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('f3c1682ac75509984d3b60c47e3d6e1d3cc9671a88a84c99dc348dee37c0e875');
const myWalletAddress = myKey.getPublic('hex');



let savjeeCoins=new Blockchain();

const tx1=new Transaction(myWalletAddress,'public goes here',10);
tx1.signTransaction(myKey);
savjeeCoins.addTransaction(tx1);

// savjeeCoins.addTransaction(new Transaction('address1','address2',100));
// savjeeCoins.addTransaction(new Transaction('address2','address1',100));

console.log('\n Starting the miner...');
savjeeCoins.minePendingTransactions(myWalletAddress);

console.log('\nBalance od xavier is',savjeeCoins.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?',savjeeCoins.isChainValid());