import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InactivePromptTimedComponent } from "../inactive-prompt-timed/inactive-prompt-timed.component";

@Component({
  selector: "app-inactive-timed-modal",
  templateUrl: "./inactive-timed-modal.component.html",
  styleUrls: ["./inactive-timed-modal.component.scss"],
})
export class InactiveTimedModalComponent implements OnInit {
  constructor(public matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    const dialog = this.matDialog.open(InactivePromptTimedComponent);

    dialog.afterClosed().subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
