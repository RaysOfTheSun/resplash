import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'logout-prompt',
    component: LogoutPromptComponent,
    outlet: 'system',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
