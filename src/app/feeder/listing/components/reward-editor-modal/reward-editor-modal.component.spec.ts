import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardEditorModalComponent } from './reward-editor-modal.component';

describe('RewardEditorModalComponent', () => {
  let component: RewardEditorModalComponent;
  let fixture: ComponentFixture<RewardEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardEditorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
