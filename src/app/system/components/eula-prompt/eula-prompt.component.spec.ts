import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EulaPromptComponent } from './eula-prompt.component';

describe('EulaPromptComponent', () => {
  let component: EulaPromptComponent;
  let fixture: ComponentFixture<EulaPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EulaPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulaPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
