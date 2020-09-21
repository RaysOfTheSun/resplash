import { Injectable } from "@angular/core";
import {
  fromEvent,
  Observable,
  pipe,
  interval,
  timer,
  Subscription,
} from "rxjs";
import { SystemEventService } from "./system-event.service";
import { AppEvent, HttpRequestEvent } from "./events/events";

@Injectable({
  providedIn: "root",
})
export class SystemTimeoutService {
  private hasWarnedUser: boolean;
  private wasMouseMoved: boolean;
  private mouseMovement$: Observable<MouseEvent>;
  private timeOutInterval$: Observable<number>;
  private userInactivityCount: number;
  private hadServerInteraction: boolean;

  private mousemoveSub: Subscription;
  private timerOutIntervalSub: Subscription;

  constructor(private systemEvents: SystemEventService) {
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.checkForActivity = this.checkForActivity.bind(this);
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.handleSystemNotification = this.handleSystemNotification.bind(this);

    this.hasWarnedUser = false;
    this.userInactivityCount = 0;
    this.wasMouseMoved = false;
    this.hadServerInteraction = false;

    this.systemEvents.notifications.subscribe(this.handleSystemNotification);
  }

  start() {
    console.log("Now monitoring user activity");
    this.mouseMovement$ = fromEvent<MouseEvent>(document, "mousemove");
    this.mousemoveSub = this.mouseMovement$.subscribe(this.handleMouseMovement);

    // check for inactivity every eight seconds (8000ms)
    this.timeOutInterval$ = interval(8000);
    this.timerOutIntervalSub = this.timeOutInterval$.subscribe(
      this.checkForActivity
    );
  }

  checkForActivity(obs) {
    console.log(obs);
    if (this.wasMouseMoved || this.hadServerInteraction) {
      this.wasMouseMoved = false;
      this.hadServerInteraction = false;
      this.userInactivityCount = 0;
      this.wasMouseMoved = false;
      return;
    }

    this.userInactivityCount === 0 && this.userInactivityCount++;
    if (this.userInactivityCount === 1 && !this.hasWarnedUser) {
      this.hasWarnedUser = true;
      this.timerOutIntervalSub.unsubscribe(); // refresh the timer
      this.systemEvents.showModal("system", "inactive-timeout");
    }
  }

  handleSystemNotification(systemEvent: AppEvent) {
    if (systemEvent instanceof HttpRequestEvent)
      this.hadServerInteraction = true;
  }

  handleMouseMovement() {
    this.wasMouseMoved = true;
  }

  reset() {
    this.wasMouseMoved = false;
    this.hadServerInteraction = false;
    this.hasWarnedUser = false;
    this.userInactivityCount = 0;
    this.timerOutIntervalSub = this.timeOutInterval$.subscribe(
      this.checkForActivity
    );
  }
}
