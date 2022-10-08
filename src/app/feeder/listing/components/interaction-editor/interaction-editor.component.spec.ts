import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionEditorComponent } from './interaction-editor.component';

describe('InteractionEditorComponent', () => {
  let component: InteractionEditorComponent;
  let fixture: ComponentFixture<InteractionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
