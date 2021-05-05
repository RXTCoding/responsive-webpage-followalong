import { Component } from "react";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      spinning: true
    };
  }

  animate = () => {
    this.setState({ spinning: !this.state.spinning });
  };

  render() {
    return (
      <div className="bigBox">
        <div
          onClick={this.animate}
          className={`smallBoxThree ${this.state.spinning ? "pause" : ""}`}
        ></div>
      </div>
    );
  }
}

export default Example;
