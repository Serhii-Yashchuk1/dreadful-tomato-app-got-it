import { Component } from '@angular/core';

import { FilterService } from 'src/app/services';

import { YearRange } from 'src/app/types';

import { UI_CONSTANTS } from 'src/app/constants';

@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss'],
})
export class RangeSelectorComponent {
  UI = UI_CONSTANTS;
  yearList: number[] = [];
  fromYear: number | undefined;
  toYear: number | undefined;

  constructor(private filterService: FilterService) {
    const currentYear = new Date().getFullYear();
    const rangeYear = 123;
    const startYear = currentYear - rangeYear;

    for (let year = currentYear; year >= startYear; year--) {
      this.yearList.push(year);
    }

    this.fromYear = startYear;
    this.toYear = currentYear;
    this.updateRange();
  }

  updateRange() {
    const range: YearRange = {
      fromYear: this.fromYear,
      toYear: this.toYear,
    };

    this.filterService.currentFilterRange.subscribe((year: YearRange) => {
      this.fromYear = year.fromYear;
      this.toYear = year.toYear;
    });

    this.filterService.setFilterRange(range);
  }
}
