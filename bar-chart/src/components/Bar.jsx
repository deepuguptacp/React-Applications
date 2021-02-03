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
    let barHeight = 40;

    let barGroups = this.state.data.map((d, i) => (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    ));

    return (
      <svg width="1000" height="300">
        <g className="container">
          <text className="title" x="40" y="30">
            Price of Fruits/KG
          </text>
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }
}
