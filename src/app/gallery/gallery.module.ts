import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';
import { GalleryPhotoViewComponent } from './components/gallery-photo-view/gallery-photo-view.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryPreviewComponent,
    GalleryPhotoViewComponent,
  ],
  imports: [
    CommonModule,
    NgxMasonryModule,
    GalleryRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class GalleryModule {}
