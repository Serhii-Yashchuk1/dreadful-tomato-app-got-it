import { Component } from '@angular/core';

import { UI_CONSTANTS, ROUTES } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  UI = UI_CONSTANTS;
  routes = ROUTES;
}
