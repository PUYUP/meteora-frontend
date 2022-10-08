import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionEditorDialogComponent } from './interaction-editor-dialog.component';

describe('InteractionEditorDialogComponent', () => {
  let component: InteractionEditorDialogComponent;
  let fixture: ComponentFixture<InteractionEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
