import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastPickSuggestComponent } from './broadcast-pick-suggest.component';

describe('BroadcastPickSuggestComponent', () => {
  let component: BroadcastPickSuggestComponent;
  let fixture: ComponentFixture<BroadcastPickSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastPickSuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastPickSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
