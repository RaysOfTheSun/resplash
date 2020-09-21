import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EulaComponent } from "./components/eula/eula.component";
import { InactiveModalComponent } from "./components/inactive-modal/inactive-modal.component";
import { InactiveTimedModalComponent } from "./components/inactive-timed-modal/inactive-timed-modal.component";

const routes: Routes = [
  {
    path: "eula",
    outlet: "system-legal",
    component: EulaComponent,
  },
  {
    path: "inactive-logout",
    outlet: "system",
    component: InactiveModalComponent,
  },
  {
    path: "inactive-timeout",
    outlet: "system",
    component: InactiveTimedModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
