import React from "react";
import CreateBarChart from "./component/createBarChart";

const obj = {
  title: "Bar Chart for Price of Fruits/KG",
  x_axis_label: "Item",
  y_axis_label: "Price/KG",
  height: 400,
  width: 400,
  barWidth: 80,
  data: [
    {
      item: "Mango",
      price: 70,
      color: "#A55CA5",
    },
    {
      item: "Apple",
      price: 75,
      color: "#67B6C7",
    },
    {
      item: "Orange",
      price: 40,
      color: "#BCCD7A",
    },
    {
      item: "Banana",
      price: 34,
      color: "#EB9743",
    },
    {
      item: "Grape",
      price: 50,
      color: "#FAFAD2",
    },
  ],
};

function App() {
  return (
    <div className="container">
      <CreateBarChart obj={obj} />
    </div>
  );
}

export default App;
