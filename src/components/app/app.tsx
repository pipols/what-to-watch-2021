import * as React from "react";
import Main from "../main/main";
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";
import history from "../../history";
import SignIn from "../signIn/signIn";
import MyList from "../mylist/myList";
import Movie from "../movie/movie";
import Review from "../add-review/add-review";

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>

        <Route path="/login" >
          <SignIn />
        </Route>

        <Route path="/mylist" >
          <MyList />
        </Route>

        <Route path="/films/:id?" exact render={({match}) => {
          const id = +match.params.id;
          return <Movie movieId={id} />;
        }}/>


        <Route path="/films/:id/review" >
          <Review />
        </Route>

        <Route path="/player/:id" >

        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
