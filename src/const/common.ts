export const Error = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  BAD_REQUEST: 400
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  BAD_REQUEST: `BAD_REQUEST`
};

export enum TabName {
  OVERVIEW = `OVERVIEW`,
  DETAILS = `DETAILS`,
  REVIEWS = `REVIEWS`,
};

export const DEFAULT_GENRE = `All genres`;

export const MoviesCount = {
  DEFAULT: 8,
  ADD: 8,
  SIMILAR: 4,
};

export const MovieRatingText = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const MovieRatingNumber = {
  BAD: {
    MIN: 0,
    MAX: 3,
  },
  NORMAL:  {
    MIN: 3,
    MAX: 5,
  },
  GOOD: {
    MIN: 5,
    MAX: 8,
  },
  VERY_GOOD: {
    MIN: 8,
    MAX: 10,
  },
  AWESOME: 10,
};

export const MAX_COUNT_GENRES = 10;
