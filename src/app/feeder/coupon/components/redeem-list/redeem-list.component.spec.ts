import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemListComponent } from './redeem-list.component';

describe('RedeemListComponent', () => {
  let component: RedeemListComponent;
  let fixture: ComponentFixture<RedeemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
