export const URL_CONSTANTS = {
  MOVIES_SERIES_URL:
    'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json',
};

export const UI_CONSTANTS = {
  txt_movies: 'Movies',
  txt_series: 'Series',
  txt_following_movies: 'Following Movies',
  txt_popular_movies: 'Popular Movies',
  txt_popular_series: 'Popular Series',
  txt_login: 'Login',
  txt_search_name: 'Name',
  txt_filters: 'Filters',
  txt_free_trial: 'Star your free trial',
  txt_from: 'From:',
  txt_to: 'To:',
  txt_home: 'Home',
  txt_terms_of_use: 'Term of Use',
  txt_legal_notice: 'Legal Notices',
  txt_help: 'Help',
  txt_manage_account: 'Manage Account',
  txt_copyright: 'Copyright 2020 Dreadful Tomato Streaming All Rights Reserved',
};

export const PAGINATION = {
  CURR_PAGE: 1,
  ITEMS_PER_PAGE: 10,
};

export const ROUTES = {
  MOVIES: '/movies',
  SERIES: '/series',
  HOME: '/',
};

export const HOME_LINKS_LIST = [
  { title: 'Movies', routerLink: '/movies', imgPath: 'assets/movies.png' },
  { title: 'Series', routerLink: '/series', imgPath: 'assets/series.png' },
];
