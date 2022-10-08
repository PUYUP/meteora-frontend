import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentEditorComponent } from './fragment-editor.component';

describe('FragmentEditorComponent', () => {
  let component: FragmentEditorComponent;
  let fixture: ComponentFixture<FragmentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
