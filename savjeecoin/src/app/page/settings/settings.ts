import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BlockchainService} from '../../services/blockchain';
@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  blockchain: any;

  constructor(private blockchainService: BlockchainService){
    this.blockchain=blockchainService.blockchainInstance;
  }
  ngOnInit(){

  }
}
