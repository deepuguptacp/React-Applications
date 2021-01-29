import react from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import "./index.css";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <react.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </react.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
