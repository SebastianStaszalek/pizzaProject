import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  user: User;

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly loginService: LoginService
  ) {
    this.user = <User>{};
  }

  ngOnInit() {
    this.loginService.getUsers().subscribe(user => this.users = user);
  }

  validateLogin(): void {
    this.user = this.loginForm.value;
    for (const credential of this.users) {
      if (credential.name === this.user.name && credential.password === this.user.password) {
        this.loginService.logIn();
        return;
      }
    }
    alert('Niepoprawny login lub haslo');
  }

}
