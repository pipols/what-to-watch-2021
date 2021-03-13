import * as React from "react"
import Main from "../main/main";
import {Router, Route, Switch} from "react-router-dom";
import history from "../../history";
import SignIn from "../signIn/signIn";
import MyList from "../mylist/myList";
import Movie from "../movie/movie";
import Review from "../review/review";

const App = () => {
  return (
    <Router history={history}>
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

        <Route exact path="/films/:id?" >
          <Movie />
        </Route>

        <Route path="/films/:id/review" >
          <Review />
        </Route>

        <Route path="/player/:id" >

        </Route>
      </Switch>
    </Router>
  );
};

export default App;
