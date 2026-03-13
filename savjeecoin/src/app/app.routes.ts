import { Routes } from '@angular/router';
import { BlockchainViewerComponents } from './pages/blockchain-viewer/blockchain-viewer';
import { CreateTransaction } from './pages/create-transaction/create-transaction';
import { PendingTransactions } from './pages/pending-transactions/pending-transactions';
import { Settings } from './page/settings/settings';

export const routes: Routes = [
    { path: '', component: BlockchainViewerComponents },
    { path: 'settings', component: Settings },
    { path: 'new/transaction', component: CreateTransaction },
    { path: 'new/transaction/pending', component: PendingTransactions }
];
