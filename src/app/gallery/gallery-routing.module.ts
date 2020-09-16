import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImagesResolverGuard } from './guards/resolvers/images-resolver.guard';
import { ImageResolverGuard } from './guards/resolvers/image-resolver.guard';
import { GalleryPhotoViewComponent } from './components/gallery-photo-view/gallery-photo-view.component';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { LoginGuard } from '../authentication/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    resolve: { images: ImagesResolverGuard },
    canActivate: [LoginGuard],
    children: [
      {
        path: 'photo/:id',
        component: GalleryPhotoViewComponent,
        resolve: { image: ImageResolverGuard },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
