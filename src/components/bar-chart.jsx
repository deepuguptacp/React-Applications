import React from "react";
import { BarChart } from "./Bar";

export function BarGroup(props) {
  let barPadding = 2;
  let barColour = props.d.color;
  let heightScale = (d) => d * 5;

  let height = heightScale(props.d.value);
  let xMid = props.barWidth * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" y="-6" x={xMid} alignmentBaseline="bottom">
        {props.d.name}
      </text>
      <rect
        x={barPadding}
        height={height}
        width={props.barWidth - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        y={height - 10}
        x={xMid}
        alignmentBaseline="middle"
      >
        {props.d.value}
      </text>
    </g>
  );
}

export default BarChart;
