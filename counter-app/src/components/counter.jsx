import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-3"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
          className="btn btn-success btn-sm m-3"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    if (this.props.counter.value === 0) {
      classes += "warning";
    }
    if (this.props.counter.value > 0) {
      classes += "primary";
    }
    return classes;
  }
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
