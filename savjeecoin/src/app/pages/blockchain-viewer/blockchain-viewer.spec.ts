import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainViewerComponents } from './blockchain-viewer';

describe('BlockchainViewerComponents', () => {
  let component: BlockchainViewerComponents;
  let fixture: ComponentFixture<BlockchainViewerComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockchainViewerComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockchainViewerComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
