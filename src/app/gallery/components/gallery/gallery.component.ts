import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: any;

  masonryOptions = {
    ordered: true,
    fitWidth: true,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.images = this.route.snapshot.data.images.data;
  }
}
