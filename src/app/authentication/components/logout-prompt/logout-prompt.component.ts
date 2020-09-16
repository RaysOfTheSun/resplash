import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../../services/autentication.service';

@Component({
  selector: 'app-logout-prompt',
  templateUrl: './logout-prompt.component.html',
  styleUrls: ['./logout-prompt.component.scss'],
})
export class LogoutPromptComponent implements OnInit {
  constructor(private authenticationService: AutenticationService) {}

  ngOnInit(): void {}

  handleLogout() {
    this.authenticationService.deAuthenticate();
  }
}
