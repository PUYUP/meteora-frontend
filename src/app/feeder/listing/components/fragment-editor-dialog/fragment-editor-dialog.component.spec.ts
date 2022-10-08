import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentEditorDialogComponent } from './fragment-editor-dialog.component';

describe('FragmentEditorDialogComponent', () => {
  let component: FragmentEditorDialogComponent;
  let fixture: ComponentFixture<FragmentEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
