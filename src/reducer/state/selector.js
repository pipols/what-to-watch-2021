import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {getMovies} from "../data/selector";
import {getGenresFromMovies} from "../../utils/utils";

const NAME_SPACE = NameSpace.STATE;

export const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;
export const getShownMovieStack = (state) => state[NAME_SPACE].shownMoviesStack;

export const getId = (state) => state[NAME_SPACE].id;
export const getFilm = createSelector(
    getMovies,
    getId,
    (movies, id) => movies.find((movie) => movie.id === id)
);

export const getGenres = createSelector(
    getMovies,
    (movies) => getGenresFromMovies(movies)
);
