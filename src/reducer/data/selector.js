import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => state[NAME_SPACE].films;
