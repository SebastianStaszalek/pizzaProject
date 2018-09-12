import { Component } from '@angular/core';
import {LoginService} from './credentials/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-project';


  constructor(
    public readonly loginService: LoginService
  ) {}

}
