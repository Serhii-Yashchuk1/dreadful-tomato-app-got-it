import { Component } from '@angular/core';

import { SearchService } from 'src/app/services';

import { UI_CONSTANTS } from 'src/app/constants';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  UI = UI_CONSTANTS;
  term: string = '';

  constructor(private searchService: SearchService) {}

  handleSearch(e: { key: string }) {
    if (e.key === 'Enter') {
      this.searchService.setSearchTerm(this.term);
    }
  }
}
