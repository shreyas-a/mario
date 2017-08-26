import React, { Component } from "react";
import { withRouter } from "react-router";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      isValid: false
    };
  }

  play() {
    this.props.setBlocks(this.state.width, this.state.height);
    this.props.history.push("/board");
  }

  areValuesValid() {
    this.setState({
      isValid: this.state.width && this.state.height
    });
  }

  handleChangeWidth(e) {
    this.setState(
      {
        width: e.target.value
      },
      () => {
        this.areValuesValid();
      }
    );
  }

  handleChangeHeight(e) {
    this.setState(
      {
        height: e.target.value
      },
      () => {
        this.areValuesValid();
      }
    );
  }

  render() {
    return (
      <div>
        <h1>MARIO</h1>
        <hr />
        <input
          type="number"
          value={this.state.width}
          onChange={this.handleChangeWidth.bind(this)}
          placeholder="width"
        />
        <input
          type="number"
          value={this.state.height}
          onChange={this.handleChangeHeight.bind(this)}
          placeholder="height"
        />
        <hr />
        <button onClick={this.play.bind(this)} disabled={!this.state.isValid}>
          Play
        </button>
      </div>
    );
  }
}

export default withRouter(Home);
