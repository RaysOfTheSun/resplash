import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AppEvent } from "./events/events";

@Injectable({
  providedIn: "root",
})
export class SystemEventService {
  private notifications$: Subject<AppEvent>;

  constructor(private router: Router) {
    this.notifications$ = new Subject<AppEvent>();
  }

  sendMessage(message: AppEvent) {
    if (!(message instanceof AppEvent)) {
      console.warn(
        "The message you have attempted to send was not of type AppEvent. Your message will not be emited."
      );
      return;
    }
    this.notifications$.next(message);
  }

  showModal(outletName: string, modalPath: string, state = {}) {
    const outlets = { [outletName]: modalPath };
    this.router.navigate(["", { outlets }], { state });
  }

  get notifications() {
    return this.notifications$;
  }
}
