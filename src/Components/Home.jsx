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

  play() {
    this.props.setBlocks(
      parseInt(this.state.width, 10),
      parseInt(this.state.height, 10)
    );
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
        <input
          type="number"
          min="1"
          max="20"
          className="flat"
          onChange={this.handleChangeWidth.bind(this)}
          placeholder="m blocks"
        />
        <input
          type="number"
          min="1"
          max="20"
          className="flat"
          onChange={this.handleChangeHeight.bind(this)}
          placeholder="n blocks"
        />
        <br/>
        <button className="btn flat" onClick={this.play.bind(this)} disabled={!this.state.isValid}>
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
