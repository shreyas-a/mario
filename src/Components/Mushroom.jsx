import React, { Component } from "react";
import PropTypes from "prop-types";

class Mushroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
      blockWidth: this.props.blockWidth,
      blockHeight: this.props.blockHeight
    };
  }

  render() {
    const styles = {
      width: this.state.blockWidth + "px",
      height: this.state.blockHeight + "px",
      marginLeft: this.state.x * this.state.blockWidth + "px",
      marginTop: this.state.y * this.state.blockHeight + "px"
    };
    return (
      <div>
        <div className="entity mushroom" style={styles} />
      </div>
    );
  }
}

Mushroom.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  blockWidth: PropTypes.number.isRequired,
  blockHeight: PropTypes.number.isRequired
};

export default Mushroom;
