import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockViewComponents } from './block-view';

describe('BlockViewComponents', () => {
  let component: BlockViewComponents;
  let fixture: ComponentFixture<BlockViewComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockViewComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockViewComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
