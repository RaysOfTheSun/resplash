import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppDataService } from "src/app/system/services/app-data.service";
import {
  PhotoViewActivatedEvent,
  PhotoViewDismissedEvent,
} from "../../../system/services/events/events";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  images: any;

  freezeScrolling: boolean;

  masonryOptions = {
    ordered: true,
    fitWidth: true,
  };

  constructor(private route: ActivatedRoute, private dataService: AppDataService) {}

  ngOnInit(): void {
    this.freezeScrolling = false;
    this.images = this.route.snapshot.data.images.data;
    this.dataService.notifications.subscribe((notif) => {
      if (notif instanceof PhotoViewActivatedEvent) this.freezeScrolling = true;
      else if (notif instanceof PhotoViewDismissedEvent) this.freezeScrolling = false;
    });
  }
}
