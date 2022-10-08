import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastSelectSuggestComponent } from './broadcast-select-suggest.component';

describe('BroadcastSelectSuggestComponent', () => {
  let component: BroadcastSelectSuggestComponent;
  let fixture: ComponentFixture<BroadcastSelectSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastSelectSuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastSelectSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
