import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { FilterService } from 'src/app/services';

import { UI_CONSTANTS, ROUTES } from 'src/app/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  UI = UI_CONSTANTS;
  routes = ROUTES;
  showIcons = false;

  constructor(private router: Router, public filterService: FilterService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showIcons = this.checkRoute(event.url);
      }
    });
  }

  checkRoute(url: string): boolean {
    if (url.includes(this.routes.MOVIES) || url.includes(this.routes.SERIES)) {
      return true;
    } else {
      return false;
    }
  }

  redirectToHome() {
    this.router.navigate([this.routes.HOME]).then(() => {
      location.reload();
    });
  }
}
