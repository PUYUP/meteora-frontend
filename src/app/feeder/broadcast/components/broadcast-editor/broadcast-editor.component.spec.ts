import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastEditorComponent } from './broadcast-editor.component';

describe('BroadcastEditorComponent', () => {
  let component: BroadcastEditorComponent;
  let fixture: ComponentFixture<BroadcastEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
