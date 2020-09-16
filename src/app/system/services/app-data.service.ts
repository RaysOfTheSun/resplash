import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import type { AppEvent } from "./events/events";

@Injectable({
  providedIn: "root",
})
export class AppDataService {
  private notifications$: Subject<AppEvent>;
  constructor() {
    this.notifications$ = new Subject();
  }

  sendMessage(message: AppEvent) {
    this.notifications$.next(message);
  }

  get notifications() {
    return this.notifications$;
  }
}
