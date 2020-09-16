import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoViewComponent } from './gallery-photo-view.component';

describe('GalleryPhotoViewComponent', () => {
  let component: GalleryPhotoViewComponent;
  let fixture: ComponentFixture<GalleryPhotoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPhotoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPhotoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
