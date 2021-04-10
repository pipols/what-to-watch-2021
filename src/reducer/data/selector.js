import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {getActiveGenre} from "../state/selector";
import {DEFAULT_GENRE, MoviesCount} from "../../const/common";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;
export const getMovieById = (state, id) => state[NAME_SPACE].movies.find((film) => film.id === id);
export const getComments = (state) => state[NAME_SPACE].comments;
export const getFavoritesMovies = (state) => state[NAME_SPACE].favoritesMovies;

export const getSimilarMovies = createSelector(
    getMovies,
    getMovieById,
    (movies, currentMovie) => movies
      .filter((movie) => movie.genre === currentMovie.genre)
      .slice(0, MoviesCount.SIMILAR)
);

export const getMoviesByGenre = createSelector(
    getMovies,
    getActiveGenre,
    (movies, genre) =>
      genre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === genre)
);
