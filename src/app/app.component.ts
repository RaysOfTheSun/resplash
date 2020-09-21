import { Component, OnInit, Renderer2 } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  AppEvent,
  LogInEvent,
  PhotoViewActivatedEvent,
  PhotoViewDismissedEvent,
} from "./system/services/events/events";
import { SystemEventService } from "./system/services/system-event.service";
import { SystemTimeoutService } from "./system/services/system-timeout.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "resplash";

  constructor(
    private serv: SystemEventService,
    private renderer: Renderer2,
    private timeOutService: SystemTimeoutService
  ) {}

  ngOnInit() {
    this.serv.notifications
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          return throwError(err);
        })
      )
      .subscribe((notif: AppEvent) => {
        if (notif instanceof LogInEvent) console.log("The user has logged in");
        else if (notif instanceof PhotoViewActivatedEvent)
          this.renderer.addClass(document.body, "modal-active");
        else if (notif instanceof PhotoViewDismissedEvent)
          this.renderer.removeClass(document.body, "modal-active");
      });
  }
}
