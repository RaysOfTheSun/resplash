import { Component, OnInit } from "@angular/core";
import { SystemEventService } from "../../../system/services/system-event.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private serv: SystemEventService) {}

  ngOnInit(): void {}

  handleClick() {
    this.serv.showModal("system-legal", "eula");
  }
}
