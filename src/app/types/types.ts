export type MoviesAndSeries = {
  title: string;
  description: string;
  programType: 'movies' | 'series';
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
};

export type Entries = {
  total: number;
  entries: MoviesAndSeries[];
};

export type YearRange = {
  fromYear?: number;
  toYear?: number;
};
