import React from "react";
import Bar from "./bar";
import "./createBarChart.css";

const CreateBarChart = ({ obj }) => {
  const {
    title,
    x_axis_label,
    y_axis_label,
    height,
    width,
    barWidth,
    defaultColor,
    data,
  } = obj;
  let col = defaultColor;

  const barsList = data.map(({ item, price, color }) => {
    col = color || defaultColor;
    return (
      <Bar
        margin={height - price * 3}
        content={item}
        height={price}
        width={barWidth}
        color={col}
      />
    );
  });

  return (
    <div>
      <h1>{title}</h1>
      <div className="chart">
        <div className="y-axis" style={{ height: `${height}px` }}>
          {y_axis_label}
        </div>
        <div
          className="flex-container"
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          {barsList}
        </div>
      </div>
      <div className="x-axis">{x_axis_label}</div>
    </div>
  );
};

export default CreateBarChart;
