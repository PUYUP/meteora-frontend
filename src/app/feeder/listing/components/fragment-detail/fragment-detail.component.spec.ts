import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentDetailComponent } from './fragment-detail.component';

describe('FragmentDetailComponent', () => {
  let component: FragmentDetailComponent;
  let fixture: ComponentFixture<FragmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
