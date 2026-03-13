import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, SlicePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-block-view',
  imports: [CommonModule, SlicePipe, DatePipe],
  templateUrl: './block-view.html',
  styleUrl: './block-view.css',
})
export class BlockViewComponents implements OnInit {
  @Input() public block: any;
  @Output() blockClicked = new EventEmitter<any>();

  constructor(){
  }

  ngOnInit(){
  }

  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }

  onBlockClick() {
    this.blockClicked.emit(this.block);
  }
}
