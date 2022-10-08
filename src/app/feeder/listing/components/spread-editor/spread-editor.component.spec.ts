import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadEditorComponent } from './spread-editor.component';

describe('SpreadEditorComponent', () => {
  let component: SpreadEditorComponent;
  let fixture: ComponentFixture<SpreadEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
