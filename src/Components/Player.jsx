import React, { Component } from "react";
import PropTypes from "prop-types";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0
    };
  }

  boardDetails = this.props.boardDetails;
  mushrooms = this.props.mushrooms;
  startTime = new Date().getTime();
  steps = 0;

  shiftDirection = direction => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      switch (direction) {
        case 37:
          this.setState({
            top: this.state.top,
            left: this.state.left - 1
          });
          this.checkDirection(direction);
          break;
        case 38:
          this.setState({
            top: this.state.top - 1,
            left: this.state.left
          });
          this.checkDirection(direction);
          break;
        case 39:
          this.setState({
            top: this.state.top,
            left: this.state.left + 1
          });
          this.checkDirection(direction);
          break;
        case 40:
          this.setState({
            top: this.state.top + 1,
            left: this.state.left
          });
          this.checkDirection(direction);
          break;
        default:
          return;
      }
    }, 50);

    const foundMushrooms = this.props.mushrooms.find(
      mushroom =>
        mushroom.x === this.state.left &&
        mushroom.y === this.state.top &&
        mushroom.remaining
    );
    if (foundMushrooms) {
      this.props.eatMushroom(foundMushrooms, this.startTime, this.steps);
    }
  };

  checkDirection = e => {
    if (e.keyCode) {
      this.steps += 1;
    }
    const toDirection = e.keyCode || e;
    const { left, top } = this.state;
    const bottomLimit = this.boardDetails.verticalBlocks - 1;
    const rightLimit = this.boardDetails.horizontalBlocks - 1;

    if (left > rightLimit - 1 && toDirection === 39) {
      // Reached RIGHT end, redirecting LEFT
      this.shiftDirection(37);
    } else if (top > bottomLimit - 1 && toDirection === 40) {
      // Reached BOTTOM end, redirecting UP
      this.shiftDirection(38);
    } else if (top < 1 && toDirection === 38) {
      // Reached TOP end, redirecting DOWN
      this.shiftDirection(40);
    } else if (left < 1 && toDirection === 37) {
      // Reached LEFT end, redirecting RIGHT
      this.shiftDirection(39);
    } else {
      this.shiftDirection(toDirection);
    }
  };

  componentDidMount() {
    window.onkeydown = this.checkDirection;
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const styles = {
      height: this.boardDetails.blockHeight + "px",
      width: this.boardDetails.blockWidth + "px",
      marginTop: this.state.top * this.boardDetails.blockHeight + "px",
      marginLeft: this.state.left * this.boardDetails.blockWidth + "px"
    };
    return (
      <div>
        <div className="entity player" style={styles} />
      </div>
    );
  }
}

Player.propTypes = {
  boardDetails: PropTypes.object.isRequired,
  mushrooms: PropTypes.array.isRequired,
  eatMushroom: PropTypes.func.isRequired
};

export default Player;
