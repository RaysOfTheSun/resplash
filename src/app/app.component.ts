import { Component, OnInit } from "@angular/core";
import { AppDataService } from "./system/services/app-data.service";
import { AppEvent, LogInEvent } from "./system/services/events/events";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "resplash";

  constructor(private serv: AppDataService) {}

  ngOnInit() {
    this.serv.notifications$.subscribe((notif: AppEvent) => {
      if (notif instanceof LogInEvent) console.log("The user has logged in");
    });
  }
}
