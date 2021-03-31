import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.STATE;

export const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;
export const getShownMovieStack = (state) => state[NAME_SPACE].shownMoviesStack;

export const getId = (state) => state[NAME_SPACE].id;
