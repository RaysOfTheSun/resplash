import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveTimedModalComponent } from './inactive-timed-modal.component';

describe('InactiveTimedModalComponent', () => {
  let component: InactiveTimedModalComponent;
  let fixture: ComponentFixture<InactiveTimedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveTimedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveTimedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
