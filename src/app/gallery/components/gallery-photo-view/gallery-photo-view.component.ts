import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  PhotoViewDismissedEvent,
  PhotoViewActivatedEvent,
} from "src/app/system/services/events/events";
import { SystemEventService } from "src/app/system/services/system-event.service";

@Component({
  selector: "app-gallery-photo-view",
  templateUrl: "./gallery-photo-view.component.html",
  styleUrls: ["./gallery-photo-view.component.scss"],
})
export class GalleryPhotoViewComponent implements OnInit {
  imageData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: SystemEventService
  ) {}

  ngOnInit(): void {
    console.log(window.history.state.exampleData);
    this.route.data.subscribe((data) => {
      this.imageData = data.image.data;
    });

    this.dataService.sendMessage(new PhotoViewActivatedEvent());
  }

  handleClick(e?: MouseEvent): void {
    this.dataService.sendMessage(new PhotoViewDismissedEvent());
    this.router.navigate(["/"]);
  }

  childClick(e?: MouseEvent): void {
    e.stopPropagation();
  }
}
