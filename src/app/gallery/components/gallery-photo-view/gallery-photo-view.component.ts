import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-photo-view',
  templateUrl: './gallery-photo-view.component.html',
  styleUrls: ['./gallery-photo-view.component.scss'],
})
export class GalleryPhotoViewComponent implements OnInit {
  imageData: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data.image.data);
      this.imageData = data.image.data;
    });
  }
  handleClick(e?: MouseEvent): void {
    this.router.navigate(['/']);
  }

  childClick(e?: MouseEvent): void {
    e.stopPropagation();
  }
}
