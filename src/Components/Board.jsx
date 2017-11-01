import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import Player from "./Player.jsx";
import Mushroom from "./Mushroom.jsx";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blockWidth: 30,
      blockHeight: 30,
      mushrooms: [],
      score: 0
    };

    if (!(this.props.horizontalBlocks || this.props.verticalBlocks)) {
      this.props.history.push("/");
    }

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const horizontalBlocks = this.props.horizontalBlocks;
    const verticalBlocks = this.props.verticalBlocks;

    for (let i = 0; i < this.totalMushrooms; i++) {
      this.state.mushrooms.push({
        key: i,
        x: getRandom(0, horizontalBlocks - 1),
        y: getRandom(0, verticalBlocks - 1),
        remaining: true
      });
    }
  }

  totalMushrooms = Math.round(
    (this.props.horizontalBlocks + this.props.verticalBlocks) / 2
  );

  eatMushroom = (foundMushroom, startTime, steps) => {
    const updatedMushrooms = [...this.state.mushrooms];
    updatedMushrooms[foundMushroom.key].remaining = false;
    this.setState({
      mushrooms: updatedMushrooms,
      score: this.state.score + 1
    });

    if (this.totalMushrooms === this.state.score) {
      this.props.setTotalTime(startTime, steps);
      this.props.history.push("/score");
    }
  };

  render() {
    const styles = {
      width: this.props.horizontalBlocks * this.state.blockWidth + "px",
      height: this.props.verticalBlocks * this.state.blockHeight + "px"
    };

    return (
      <div>
        <h2>MARIO</h2>
        <p>
          Score: {this.state.score} / {this.totalMushrooms}
        </p>
        <p>Start with any of the arrow keys</p>
        <div className="board" style={styles}>
          <Player
            boardDetails={{
              blockWidth: this.state.blockWidth,
              blockHeight: this.state.blockHeight,
              horizontalBlocks: this.props.horizontalBlocks,
              verticalBlocks: this.props.verticalBlocks
            }}
            mushrooms={this.state.mushrooms}
            eatMushroom={this.eatMushroom}
          />
          {this.state.mushrooms
            .filter(mushroom => {
              return mushroom.remaining;
            })
            .map(mushroom => {
              return (
                <Mushroom
                  key={mushroom.key}
                  x={mushroom.x}
                  y={mushroom.y}
                  blockWidth={this.state.blockWidth}
                  blockHeight={this.state.blockHeight}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  horizontalBlocks: PropTypes.number.isRequired,
  verticalBlocks: PropTypes.number.isRequired,
  setTotalTime: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired
};

export default withRouter(Board);
