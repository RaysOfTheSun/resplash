import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InactivePromptBasicComponent } from "../inactive-prompt-basic/inactive-prompt-basic.component";
import { InactivePromptTimedComponent } from "../inactive-prompt-timed/inactive-prompt-timed.component";

@Component({
  selector: "app-inactive-modal",
  templateUrl: "./inactive-modal.component.html",
  styleUrls: ["./inactive-modal.component.scss"],
})
export class InactiveModalComponent implements OnInit {
  constructor(public matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    const dialog = this.matDialog.open(InactivePromptBasicComponent, {
      disableClose: true,
    });

    dialog.afterClosed().subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
