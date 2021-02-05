import React from "react";
import Accordion from "./components/Accordion";
import AboutUs from "./content/personal-info";
import Address from "./content/userAddress";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Personal Information",
    content: () => <AboutUs />,
    state: "inactive",
  },
  {
    id: 2,
    name: "Permanent Address",
    content: () => <Address />,
    state: "inactive",
  },
  {
    id: 3,
    name: "Temporary Address",
    content: () => <Address />,
    state: "inactive",
  },
];

function App() {
  return (
    <div className="container">
      <Accordion data={data} />
    </div>
  );
}

export default App;
