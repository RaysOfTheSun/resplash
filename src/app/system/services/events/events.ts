export class Events {}

export abstract class AppEvent {
  type = "generic";
}

export class LogInEvent extends AppEvent {
  constructor() {
    super();
  }
}

export class PhotoViewActivatedEvent extends AppEvent {
  constructor() {
    super();
    this.type = "imageViewActivated";
  }
}

export class PhotoViewDismissedEvent extends AppEvent {
  constructor() {
    super();
    this.type = "PhotoViewDismissedEvent";
  }
}

export class UserTimeOutEvent extends AppEvent {
  constructor() {
    super();
    this.type = "UserTimeOutEvent";
  }
}

export class HttpRequestEvent extends AppEvent {
  constructor() {
    super();
    this.type = "HttpRequestEvent";
  }
}
