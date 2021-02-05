import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { accordions: this.props.data };
  }
  handleClick = (currentAccordion) => {
    const newAccordions = this.state.accordions;
    newAccordions.forEach((accordion) => {
      if (currentAccordion.id === accordion.id) {
        if (accordion.state === "inactive") {
          accordion.state = "active";
          this.setPanelHeight(`.panel-${accordion.id}`, false);
        } else {
          accordion.state = "inactive";
          this.setPanelHeight(`.panel-${accordion.id}`, true);
        }
      } else {
        accordion.state = "inactive";
        this.setPanelHeight(`.panel-${accordion.id}`, true);
      }
    });
    this.setState({ accordions: newAccordions });
  };
  setPanelHeight(selector, close) {
    const panel = document.querySelector(`${selector}`);
    panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
  }
  render() {
    const { accordions } = this.state;
    return (
      <React.Fragment>
        {accordions.map((accordion, index) => {
          return (
            <React.Fragment key={index}>
              <button
                className={`accordion ${accordion.state}`}
                onClick={() => this.handleClick(accordion)}
              >
                {accordion.name}
              </button>
              <div className={`panel panel-${accordion.id}`}>
                {accordion.content()}
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Accordion;
