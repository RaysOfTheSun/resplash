import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss'],
})
export class GalleryPreviewComponent implements OnInit {
  @Input() photoID: string;
  @Input('photo-src') src: string;

  constructor() {}

  ngOnInit(): void {}
}
