import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { AuthenticationGuard } from "./guards/authentication.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "logout-prompt",
    component: LogoutComponent,
    outlet: "system-legal",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
