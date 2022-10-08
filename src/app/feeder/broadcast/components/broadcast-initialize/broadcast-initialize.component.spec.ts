import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastInitializeComponent } from './broadcast-initialize.component';

describe('BroadcastInitializeComponent', () => {
  let component: BroadcastInitializeComponent;
  let fixture: ComponentFixture<BroadcastInitializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastInitializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastInitializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
