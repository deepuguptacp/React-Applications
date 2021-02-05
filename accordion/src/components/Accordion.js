import React, { useState, useRef } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [setActive, setActiveState] = useState(0);
  const [setHeight, setHeightState] = useState("0px");

  content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <React.Fragment>
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion-title">{title}</p>
        </button>
        <div
          className="accordion-content"
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div
            className="accordion-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
