import {DEFAULT_GENRE} from "./../const/common";

export const extend = (a, b) => Object.assign({}, a, b);

export const getGenresFromMovies = (movies) => {
  let set = new Set();

  movies.map((movie) => set.add(movie.genre));
  const genres = [...set];
  genres.unshift(DEFAULT_GENRE);

  return genres;
};

export const getMoviesByGenre = (movies, genre) => genre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === genre);
