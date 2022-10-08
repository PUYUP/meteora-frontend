import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestDetailComponent } from './suggest-detail.component';

describe('SuggestDetailComponent', () => {
  let component: SuggestDetailComponent;
  let fixture: ComponentFixture<SuggestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
