import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private readonly loginService: LoginService,
    private readonly route: Router) {
  }

  canActivate(): boolean {
    const isLogged = this.loginService.isLogged;
    if (!isLogged) {
      alert('Only logged users can access further.');
      this.route.navigate(['/login']);
    }

    return isLogged;
  }

}
