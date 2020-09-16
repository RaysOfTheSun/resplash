import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UnsplashService } from '../../services/unsplash.service';
import { map, catchError } from 'rxjs/operators';

export interface dataMap {
  data: any;
  err: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImagesResolverGuard implements Resolve<dataMap> {
  constructor(private unsplashServce: UnsplashService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<dataMap> | Promise<dataMap> | dataMap {
    return this.unsplashServce.getPhotos().pipe(
      map((data) => ({ data, err: null })),
      catchError((err) => of({ data: null, err }))
    );
  }
}
