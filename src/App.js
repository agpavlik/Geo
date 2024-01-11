import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// When the URL changes the 'Redirect' component go through all the routes
// and see if the path is nothing, render that. If the path is anything else,
// this will not trigger and instead redirect us back to '/'.

// The 'Switch' component instructs react router that inside of the switch block
// whenever it encounters a fitting root, it will not evaluate the lines thereafter,
// so it will not redirect if it was able to identify the path.

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
