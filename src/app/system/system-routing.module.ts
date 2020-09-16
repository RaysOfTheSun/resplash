import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EulaComponent } from "./components/eula/eula.component";

const routes: Routes = [
  {
    path: "eula",
    outlet: "system-legal",
    component: EulaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
