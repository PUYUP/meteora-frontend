import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadDetailComponent } from './spread-detail.component';

describe('SpreadDetailComponent', () => {
  let component: SpreadDetailComponent;
  let fixture: ComponentFixture<SpreadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
