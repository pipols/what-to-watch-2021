import {extend} from "../../utils/utils";
import {adapterFilms, adapterFilm} from "../../utils/adapter";
import {ActionCreator as ActionCreatorState} from "../state/state";
import history from "../../history";
import NameSpace from "../name-space";
import {errorPopup} from "../../utils/utils";

const initialState = {

};

const ActionType = {

};

const ActionCreator = {
  loadPromoMovie: (film) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: film
  })
};

const DataOperation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  postFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${id}/${status}`)
      .then(({data}) => {
        const film = adapterFilm(data);
        const store = getState();
        if (store[NameSpace.DATA].promoMovie.id === id) {
          dispatch(ActionCreator.mergePromoFilm(film));
        }
        dispatch(ActionCreator.mergeFilm(film));
      }).catch(({response}) => errorPopup(response));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState, DataOperation};
