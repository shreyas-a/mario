import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var hours = Math.floor(
      this.props.totalTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    var minutes = Math.floor(
      this.props.totalTime % (1000 * 60 * 60) / (1000 * 60)
    );
    var seconds = Math.floor(this.props.totalTime % (1000 * 60) / 1000);

    return (
      <div>
        <h1>MARIO - Score</h1>
        <hr />
        {hours} Hours {minutes} Minutes {seconds} Seconds
        <Link to="/board">Restart</Link>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

Score.propTypes = {
  totalTime: PropTypes.number.isRequired
};

export default Score;
