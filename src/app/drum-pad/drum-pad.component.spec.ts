import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumPadComponent } from './drum-pad.component';

describe('DrumPadComponent', () => {
  let component: DrumPadComponent;
  let fixture: ComponentFixture<DrumPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
