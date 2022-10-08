import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastEditorDialogComponent } from './broadcast-editor-dialog.component';

describe('BroadcastEditorDialogComponent', () => {
  let component: BroadcastEditorDialogComponent;
  let fixture: ComponentFixture<BroadcastEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
