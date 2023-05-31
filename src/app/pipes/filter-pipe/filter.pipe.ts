import { Pipe, PipeTransform } from '@angular/core';

import { MoviesAndSeries } from 'src/app/types';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: MoviesAndSeries[], yearRange: any): MoviesAndSeries[] {
    if (yearRange && yearRange.fromYear && yearRange.toYear) {
      return data.filter(
        (show) =>
          show.releaseYear >= yearRange.fromYear &&
          show.releaseYear <= yearRange.toYear,
      );
    }
    return data;
  }
}
