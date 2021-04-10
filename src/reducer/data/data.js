import {extend} from "../../utils/utils";
import {adapterMovie, adapterMovies} from "../../adapters/movie";
import NameSpace from "../name-space";

const initialState = {
  movies: [],
  promoMovie: [],
  favoritesMovies: [],
  comments: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_FAVORITES_MOVIES: `LOAD_FAVORITES_MOVIES`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  MERGE_MOVIE: `MERGE_MOVIE`,
};

const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadFavoritesMovies: (movies) => ({
    type: ActionType.LOAD_FAVORITES_MOVIES,
    payload: movies,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  mergeMovie: (movie) => ({
    type: ActionType.MERGE_MOVIE,
    payload: movie
  }),
};

const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const movies = adapterMovies(data);
        dispatch(ActionCreator.loadMovies(movies));
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const movie = adapterMovie(data);
        dispatch(ActionCreator.loadPromoMovie(movie));
      });
  },
  loadFavoritesMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        const movies = adapterMovies(data);
        dispatch(ActionCreator.loadFavoritesMovies(movies));
      });
  },
  loadComments: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(data));
      });
  },
  postFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${id}/${status}`)
      .then(({data}) => {
        const movie = adapterMovie(data);
        const store = getState();
        if (store[NameSpace.DATA].promoMovie.id === id) {
          dispatch(ActionCreator.loadPromoMovie(movie));
        }
        dispatch(ActionCreator.mergeMovie(movie));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_FAVORITES_MOVIES:
      return extend(state, {
        favoritesMovies: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    case ActionType.MERGE_MOVIE:
      return extend(state, {
        movies: state.movies
          .map((movie) => movie.id === action.payload.id ? action.payload : movie)
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState, DataOperation};
