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
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundImage: `url('https://res.cloudinary.com/payjo-in/image/upload/c_scale,w_24/v1502452864/mushroom-512_f9ma5t.png')`,
      marginLeft: this.state.x * this.state.blockWidth + "px",
      marginTop: this.state.y * this.state.blockHeight + "px",
      position: "absolute"
    };
    return (
      <div>
        <div style={styles} />
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
