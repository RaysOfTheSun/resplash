import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePromptTimedComponent } from './inactive-prompt-timed.component';

describe('InactivePromptTimedComponent', () => {
  let component: InactivePromptTimedComponent;
  let fixture: ComponentFixture<InactivePromptTimedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivePromptTimedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivePromptTimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
