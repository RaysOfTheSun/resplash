import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable, interval, Subscription } from "rxjs";
import { SystemEventService } from "../../services/system-event.service";
import { MatDialog } from "@angular/material/dialog";
import { SystemTimeoutService } from "../../services/system-timeout.service";

@Component({
  selector: "app-inactive-prompt-timed",
  templateUrl: "./inactive-prompt-timed.component.html",
  styleUrls: ["./inactive-prompt-timed.component.scss"],
})
export class InactivePromptTimedComponent implements OnInit {
  timer$: Subscription;
  timeLeft: number;

  constructor(
    private systemEvents: SystemEventService,
    private timeOutService: SystemTimeoutService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.timeLeft = 30000;
    this.timer$ = this.timer$ = interval(1000).subscribe(() => {
      this.timeLeft = this.timeLeft - 1000 > 0 ? this.timeLeft - 1000 : 0;

      if (!this.timeLeft) {
        this.timer$.unsubscribe();
        this.dialog.closeAll();
        this.systemEvents.showModal("system", "inactive-logout");
      }
    });
  }

  handleRefreshSession() {
    this.timer$.unsubscribe();
    this.timeOutService.reset();
  }
}
