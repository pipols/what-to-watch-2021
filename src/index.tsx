import * as React from "react"
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer/reducer";
import {DataOperation} from "./reducer/data/data";
import thunk from "redux-thunk";
import {Error, AuthorizationStatus} from "./const/common";
import createAPI from "./api";

import App from "./components/app/app";

const onResponse = (response) => {
  // switch (response.status) {
  //   case Error.UNAUTHORIZED:
  //     return store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  //   // case Error.BAD_REQUEST:
  //   //   return store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.BAD_REQUEST));
  // }
  console.error(response);
};

const api = createAPI(onResponse);
// попробовать без devTools
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadPromoMovie());
store.dispatch(DataOperation.loadMovies());

const container = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
);
