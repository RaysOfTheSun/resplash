import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePromptBasicComponent } from './inactive-prompt-basic.component';

describe('InactivePromptBasicComponent', () => {
  let component: InactivePromptBasicComponent;
  let fixture: ComponentFixture<InactivePromptBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivePromptBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivePromptBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
