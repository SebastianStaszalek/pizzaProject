import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.isLogged = false;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  logIn() {
    this.isLogged = true;
    this.router.navigate(['/admin-panel']);
  }

  logOut() {
    this.isLogged = false;
    this.router.navigate(['/']);
  }
}
