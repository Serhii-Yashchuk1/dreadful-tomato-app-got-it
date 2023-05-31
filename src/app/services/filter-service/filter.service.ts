import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { YearRange } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterRange = new BehaviorSubject<object>({});
  currentFilterRange = this.filterRange.asObservable();

  constructor() {}

  setFilterRange(range: YearRange) {
    this.filterRange.next(range);
  }

  setDefaultFilterRange() {
    this.filterRange.next({ fromYear: 1900, toYear: 2023 });
  }
}
