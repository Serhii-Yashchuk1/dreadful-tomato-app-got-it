import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map, tap } from 'rxjs';

import { Entries, MoviesAndSeries } from 'src/app/types';

import { URL_CONSTANTS as URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesAndSeriesService {
  url = URL.MOVIES_SERIES_URL;
  movies: MoviesAndSeries[] = [];
  series: MoviesAndSeries[] = [];
  filteredShows: MoviesAndSeries[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MoviesAndSeries[]> {
    return this.http.get<Entries>(this.url).pipe(
      tap((res) => {
        this.movies = res.entries.filter(
          (entry) => entry.programType === 'movies',
        );
      }),
      map((movie) => this.movies),
    );
  }

  getSeries(): Observable<MoviesAndSeries[]> {
    return this.http.get<Entries>(this.url).pipe(
      tap((res) => {
        this.series = res.entries.filter(
          (entry) => entry.programType === 'series',
        );
      }),
      map((serial) => this.series),
    );
  }
}
