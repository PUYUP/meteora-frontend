import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadEditorDialogComponent } from './spread-editor-dialog.component';

describe('SpreadEditorDialogComponent', () => {
  let component: SpreadEditorDialogComponent;
  let fixture: ComponentFixture<SpreadEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
