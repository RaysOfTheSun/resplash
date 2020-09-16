import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UnsplashService } from '../../services/unsplash.service';

export interface dataMap {
  data: any;
  err: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageResolverGuard implements Resolve<dataMap> {
  constructor(private unsplashService: UnsplashService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<dataMap> | Promise<dataMap> | dataMap {
    const photoID = route.paramMap.get('id');
    return this.unsplashService.getPhoto(photoID).pipe(
      map((data) => ({ data, err: null })),
      catchError((err) => of({ data: null, err }))
    );
  }
}
