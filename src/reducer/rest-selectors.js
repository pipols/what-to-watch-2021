import {createSelector} from "reselect";
import {getMoviesByGenre, getMovies} from "./data/selector";
import {getShownMovieStack, getId} from "./state/selector";
import {getGenresFromMovies} from "../utils/utils";
import {MAX_COUNT_GENRES} from "../const/common";

export const getIsShownMore = createSelector(
    getMoviesByGenre,
    getShownMovieStack,
    (movies, stack) => movies.length > stack
);

export const getFilm = createSelector(
    getMovies,
    getId,
    (movies, id) => movies.find((movie) => movie.id === id)
);

export const getGenres = createSelector(
    getMovies,
    (movies) => getGenresFromMovies(movies).slice(0, MAX_COUNT_GENRES)
);

export const getMoviesForCatalog = createSelector(
    getMoviesByGenre,
    getShownMovieStack,
    (movies, movieStack) => movies.slice(0, movieStack)
);
