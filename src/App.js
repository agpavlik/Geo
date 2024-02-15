import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

// The "Redirect" component allows to make sure that we are not able to end up on unsupported pages
// When the URL changes the 'Redirect' component go through all the routes
// and see if the path is '/', render that. If the path is anything else,
// this will not trigger and instead redirect us back to '/'.

// The 'Switch' component instructs react router that inside of the switch block
// whenever it encounters a fitting root, it will not evaluate the lines thereafter,
// so it will not redirect if it was able to identify the path.

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
