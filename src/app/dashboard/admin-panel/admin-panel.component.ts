import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {

  active: string;

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {
  }

  showDishesList() {
    this.active = 'dishes';
    this.router.navigate(['dashboard-dishes-list'], {relativeTo: this.route});
  }

  showOrdersList() {
    this.active = 'orders';
    this.router.navigate(['dashboard-orders-list'], {relativeTo: this.route});
  }

}
