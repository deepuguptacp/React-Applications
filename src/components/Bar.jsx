import React from "react";
import { BarGroup } from "./bar-chart";

export class BarChart extends React.Component {
  state = {
    data: [
      { name: "Mango", value: 70, color: "#A55CA5" },
      { name: "Apple", value: 75, color: "#67B6C7" },
      { name: "Orange", value: 40, color: "#BCCD7A" },
      { name: "Banana", value: 34, color: "#EB9743" },
      { name: "Grape", value: 50, color: "#FAFAD2" },
    ],
  };

  render() {
    let barWidth = 50;

    let barGroups = this.state.data.map((data, index) => (
      <g transform={`translate(${barWidth * index}, 50)`}>
        <BarGroup d={data} barWidth={barWidth} />
      </g>
    ));

    return (
      <svg width="900" height="1000">
        <g className="container">
          <text className="title" x="40" y="30">
            Price of Fruits/KG
          </text>
          <g className="chart" transform="translate(100,100)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }
}
