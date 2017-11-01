import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: undefined,
      height: undefined,
      isValid: false
    };
  }

  play = () => {
    this.props.setBlocks(
      parseInt(this.state.width, 10),
      parseInt(this.state.height, 10)
    );
    this.props.history.push("/board");
  };

  areValuesValid() {
    this.setState({
      isValid:
        this.state.width > 0 &&
        this.state.height > 0 &&
        this.state.width <= 40 &&
        this.state.height <= 20
    });
  }

  handleChangeWidth = e => {
    this.setState(
      {
        width: e.target.value
      },
      () => {
        this.areValuesValid();
      }
    );
  };

  handleChangeHeight = e => {
    this.setState(
      {
        height: e.target.value
      },
      () => {
        this.areValuesValid();
      }
    );
  };

  render() {
    return (
      <div>
        <h1 className="funky">MARIO</h1>
        <p>Enter dimensions of the play board</p>
        <input
          type="number"
          min="1"
          max="20"
          className="flat"
          onChange={this.handleChangeWidth}
          placeholder="Width 1 - 40"
        />
        <input
          type="number"
          min="1"
          max="20"
          className="flat"
          onChange={this.handleChangeHeight}
          placeholder="Height 1 - 20"
        />
        <br />
        <button
          className="btn flat funky"
          onClick={this.play}
          disabled={!this.state.isValid}
        >
          Play
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  setBlocks: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired
};

export default withRouter(Home);
