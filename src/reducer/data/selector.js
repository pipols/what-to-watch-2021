import NameSpace from "../name-space";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;
export const getMovieById = (state, id) => state[NAME_SPACE].movies.find((film) => film.id === id);
export const getComments = (state) => state[NAME_SPACE].comments;

export const getSimilarMovies = createSelector(
    getMovies,
    getMovieById,
    (movies, currentMovie) => movies.filter((movie) => movie.genre === currentMovie.genre)
);
