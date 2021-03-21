import {extend} from "../../utils/utils";
import {DEFAULT_GENRE} from "../../const/common";

const initialState = {
  activeGenre: DEFAULT_GENRE,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
