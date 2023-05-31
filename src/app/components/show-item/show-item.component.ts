import { Component, Input } from '@angular/core';

import { MoviesAndSeries } from 'src/app/types';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() showItem?: MoviesAndSeries;
}
