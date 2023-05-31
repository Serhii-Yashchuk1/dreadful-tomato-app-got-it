import { Component, OnInit } from '@angular/core';

import {
  SearchService,
  MoviesAndSeriesService,
  FilterService,
} from 'src/app/services';

import { YearRange } from 'src/app/types';

import { UI_CONSTANTS, PAGINATION as PGN } from 'src/app/constants';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
  UI = UI_CONSTANTS;
  currentPage = PGN.CURR_PAGE;
  itemsPerPage = PGN.ITEMS_PER_PAGE;
  isLoading = false;
  term: string = '';
  yearRange?: YearRange;

  constructor(
    public moviesService: MoviesAndSeriesService,
    private searchService: SearchService,
    private filterService: FilterService,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.moviesService.getMovies().subscribe(() => {
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
