import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LogoutPromptComponent } from "../logout-prompt/logout-prompt.component";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(LogoutPromptComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
