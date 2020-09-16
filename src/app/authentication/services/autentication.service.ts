import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  private knownCredentials = {
    carl: {
      username: 'carl',
      password: '12345',
    },
  };
  constructor(private router: Router) {}

  authenticate(userData) {
    const { username, password } = userData;
    if (
      this.knownCredentials[username] &&
      this.knownCredentials[username].username === username &&
      this.knownCredentials[username].password === password
    ) {
      sessionStorage.setItem('username', username);
      return of({ authenticated: true, message: null });
    }

    return of({
      authenticated: false,
      message: 'Your username or password is invalid',
    });
  }

  deAuthenticate() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
