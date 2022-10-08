import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadListComponent } from './spread-list.component';

describe('SpreadListComponent', () => {
  let component: SpreadListComponent;
  let fixture: ComponentFixture<SpreadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
