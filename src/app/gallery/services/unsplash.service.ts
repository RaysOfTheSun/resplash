import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private ACCESS_KEY = environment.API_KEY;
  private defaultRequestHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.defaultRequestHeaders = new HttpHeaders({
      Authorization: `Client-ID ${this.ACCESS_KEY}`,
    });
  }

  getPhoto(imageID: string) {
    return this.http.get(`https://api.unsplash.com/photos/${imageID}`, {
      headers: this.defaultRequestHeaders,
    });
  }

  getPhotos() {
    return this.http.get('https://api.unsplash.com/photos/', {
      headers: this.defaultRequestHeaders,
    });
  }
}
