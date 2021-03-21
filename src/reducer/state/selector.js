import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {getFilms} from "../data/selector";

const NAME_SPACE = NameSpace.STATE;

export const getGenre = (state) => state[NAME_SPACE].genre;

export const getId = (state) => state[NAME_SPACE].id;
export const getFilm = createSelector(
    getFilms,
    getId,
    (films, id) => films.find((film) => film.id === id)
);
