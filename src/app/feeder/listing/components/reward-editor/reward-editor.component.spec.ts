import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardEditorComponent } from './reward-editor.component';

describe('RewardEditorComponent', () => {
  let component: RewardEditorComponent;
  let fixture: ComponentFixture<RewardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
