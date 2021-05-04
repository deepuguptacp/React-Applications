import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { firebaseAuth } from "./components/authProvider";

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(rProps) => (token === null ? <Signin /> : <Home />)}
        />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
