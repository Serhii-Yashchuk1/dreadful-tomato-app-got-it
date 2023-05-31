import { Component } from '@angular/core';

import { UI_CONSTANTS, ROUTES } from 'src/app/constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  UI = UI_CONSTANTS;
  routes = ROUTES;
}
