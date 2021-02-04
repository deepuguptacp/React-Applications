import React from "react";
import "./bar.css";

const Bar = ({ height, width, margin, color, content }) => {
  const styleBar = {
    height: height * 3,
    width: width,
    marginTop: margin,
    background: color,
  };

  return (
    <div className="bars" style={styleBar}>
      {content}
      <br />
      {height}
    </div>
  );
};

export default Bar;
