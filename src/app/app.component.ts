import { Component, OnInit, Renderer2 } from "@angular/core";
import { AppDataService } from "./system/services/app-data.service";
import {
  AppEvent,
  LogInEvent,
  PhotoViewActivatedEvent,
  PhotoViewDismissedEvent,
} from "./system/services/events/events";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "resplash";

  constructor(private serv: AppDataService, private renderer: Renderer2) {}

  ngOnInit() {
    this.serv.notifications.subscribe((notif: AppEvent) => {
      if (notif instanceof LogInEvent) console.log("The user has logged in");
      else if (notif instanceof PhotoViewActivatedEvent)
        this.renderer.addClass(document.body, "modal-active");
      else if (notif instanceof PhotoViewDismissedEvent)
        this.renderer.removeClass(document.body, "modal-active");
    });
  }
}
