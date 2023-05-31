import { Component } from '@angular/core';

import {
  SearchService,
  MoviesAndSeriesService,
  FilterService,
} from 'src/app/services';

import { YearRange } from 'src/app/types';

import { UI_CONSTANTS, PAGINATION as PGN } from 'src/app/constants';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.scss'],
})
export class SeriesPageComponent {
  UI = UI_CONSTANTS;
  currentPage = PGN.CURR_PAGE;
  itemsPerPage = PGN.ITEMS_PER_PAGE;
  isLoading = false;
  term: string = '';
  yearRange?: YearRange;

  constructor(
    public seriesService: MoviesAndSeriesService,
    private searchService: SearchService,
    private filterService: FilterService,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.seriesService.getSeries().subscribe(() => {
      this.isLoading = false;
    });

    this.searchService.currentSearchTerm.subscribe((term) => {
      this.term = term;
    });

    this.filterService.currentFilterRange.subscribe((year: YearRange) => {
      this.yearRange = year;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
