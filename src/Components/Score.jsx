import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Score extends Component {
  constructor(props) {
    super(props);

    if (!this.props.totalTime) {
      this.props.history.push("/");
    }
  }

  render() {
    var minutes = Math.floor(
      this.props.totalTime % (1000 * 60 * 60) / (1000 * 60)
    );
    var seconds = Math.floor(this.props.totalTime % (1000 * 60) / 1000);

    return (
      <div>
        <h1>MARIO</h1>
        <h2>
          <p>
            {minutes ? `${minutes} minute(s), ` : ""}
            {seconds || 0} second(s)
          </p>
          <p>
            {this.props.steps || 0} Steps taken
          </p>
        </h2>
        <br />
        <Link className="btn flat" to="/board">
          Restart
        </Link>
        <Link className="btn flat" to="/">
          Home
        </Link>
      </div>
    );
  }
}

Score.propTypes = {
  totalTime: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  history: PropTypes.any.isRequired
};

export default withRouter(Score);
