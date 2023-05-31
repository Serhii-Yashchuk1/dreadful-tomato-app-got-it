import { Pipe, PipeTransform } from '@angular/core';

import { MoviesAndSeries } from '../../types';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(data: MoviesAndSeries[], term: string): MoviesAndSeries[] {
    if (term === '') {
      return data;
    }
    return data.filter((show) =>
      show.title.toLowerCase().includes(term.toLowerCase()),
    );
  }
}
