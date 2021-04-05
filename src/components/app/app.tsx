import * as React from "react";
import Main from "../main/main";
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import history from "../../history";
import SignIn from "../signIn/signIn";
import MyList from "../mylist/myList";
import Movie from "../movie/movie";
import Review from "../add-review/add-review";
import Player from "../player/player";
import PrivateRoute from "./../private-route/private-route";
import {AuthorizationStatus, AppRoute} from "../../const/common";
import {connect} from "react-redux";

type Props = {
  authorizationStatus: AuthorizationStatus;
};

const App = (props: Props) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN} >
          <Main />
        </Route>

        <Route exact path={AppRoute.LOGIN} render={() => {
          return props.authorizationStatus === AuthorizationStatus.AUTH
            ? history.push(AppRoute.MAIN)
            : <SignIn />;
        }} />

        <PrivateRoute path={AppRoute.MY_LIST} >
          <MyList />
        </PrivateRoute>

        <Route path="/films/:id?" exact render={({match}) => {
          const id = +match.params.id;
          return <Movie movieId={id} />;
        }}/>


        <Route path="/films/:id/review" >
          <Review />
        </Route>

        <Route path="/player/:id" exact render={({match}) => {
          const id = +match.params.id;
          return <Player movieId={id} />;
        }}/>

      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(App);
