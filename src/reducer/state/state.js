import {extend} from "../../utils/utils";
import {DEFAULT_GENRE, MoviesCount} from "../../const/common";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  shownMoviesStack: MoviesCount.DEFAULT,
  isReviewFormDisabled: false,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  RESET_GENRE: `RESET_GENRE`,
  ADD_MOVIES_STACK: `ADD_MOVIES_STACK`,
  RESET_MOVIES_STACK: `RESET_MOVIES_STACK`,
  SET_REVIEW_FORM_DISABLED_STATUS: `SET_REVIEW_FORM_DISABLED_STATUS`,
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
  }),
  setReviewFormDisabledStatus: (status) => ({
    type: ActionType.SET_REVIEW_FORM_DISABLED_STATUS,
    payload: status,
  }),
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
    case ActionType.SET_REVIEW_FORM_DISABLED_STATUS:
      return extend(state, {
        isReviewFormDisabled: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
