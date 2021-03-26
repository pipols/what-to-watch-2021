import {extend} from "../../utils/utils";
import {DEFAULT_GENRE, MoviesCount} from "../../const/common";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  shownMoviesStack: MoviesCount.DEFAULT,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  RESET_GENRE: `RESET_GENRE`,
  ADD_MOVIES_STACK: `ADD_MOVIES_STACK`,
  RESET_MOVIES_STACK: `RESET_MOVIES_STACK`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
    payload: DEFAULT_GENRE,
  }),
  addMoviesStack: () => ({
    type: ActionType.ADD_MOVIES_STACK,
  }),
  resetMoviesStack: () => ({
    type: ActionType.RESET_MOVIES_STACK,
    payload: MoviesCount.DEFAULT,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionType.ADD_MOVIES_STACK:
      return extend(state, {
        shownMoviesStack: state.shownMoviesStack + MoviesCount.ADD
      });
    case ActionType.RESET_MOVIES_STACK:
      return extend(state, {
        shownMoviesStack: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
