import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { EulaPromptComponent } from "../eula-prompt/eula-prompt.component";

@Component({
  selector: "app-eula",
  templateUrl: "./eula.component.html",
  styleUrls: ["./eula.component.scss"],
})
export class EulaComponent implements OnInit {
  constructor(public matDialog: MatDialog, private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    const dialog = this.matDialog.open(EulaPromptComponent);

    dialog.afterClosed().subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
