import { Component } from '@angular/core';

import { UI_CONSTANTS, ROUTES, HOME_LINKS_LIST } from 'src/app/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  UI = UI_CONSTANTS;
  routes = ROUTES;
  homeLinks = HOME_LINKS_LIST;
}
