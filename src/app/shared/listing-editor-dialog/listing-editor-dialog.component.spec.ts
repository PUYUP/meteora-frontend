import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingEditorDialogComponent } from './listing-editor-dialog.component';

describe('ListingEditorDialogComponent', () => {
  let component: ListingEditorDialogComponent;
  let fixture: ComponentFixture<ListingEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
