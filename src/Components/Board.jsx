import React, { Component } from "react";
import { withRouter } from 'react-router';

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

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < this.totalMushrooms; i++) {
      this.state.mushrooms.push({
        key: i,
        x: getRandom(0, this.props.horizontalBlocks - 1),
        y: getRandom(0, this.props.verticalBlocks - 1),
        remaining: true
      });
    }
  }

  // TODO
  // totalMushrooms = Math.round(
  //   (this.props.horizontalBlocks + this.props.verticalBlocks) / 2
  // );
  totalMushrooms = 3;

  eatMushroom = (foundMushroom, startTime) => {
    const updatedMushrooms = this.state.mushrooms;
    updatedMushrooms[foundMushroom.key].remaining = false;
    this.setState({
      mushrooms: updatedMushrooms,
      score: this.state.score + 1
    });

    if (this.totalMushrooms === this.state.score) {
      this.props.setTotalTime(startTime);
      this.props.history.push("/score");
    }
  };

  render() {
    const styles = {
      width: this.props.horizontalBlocks * this.state.blockWidth + "px",
      height: this.props.verticalBlocks * this.state.blockHeight + "px",
      background: "white",
      border: "1px solid black"
    };

    return (
      <div>
        <h1>
          MARIO - {this.state.score}
        </h1>
        <hr />
        <div style={styles}>
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

export default withRouter(Board);
