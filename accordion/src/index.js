import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Accordion
        title="Personal Information"
        content="Hey! I am abc from def, i have been working with ghi since 20XX."
      />
      <Accordion
        title="Permanent Address"
        content="I belong to jkl city, pincode:- ******"
      />
      <Accordion
        title="Temporary Address"
        content="Temperorarily i belong to mno, pincode:- ######"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
