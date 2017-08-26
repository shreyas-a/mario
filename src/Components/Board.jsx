import React, { Component } from "react";

import Player from "./Player.jsx";
import Mushroom from "./Mushroom.jsx";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalBlocks: 50,
      verticalBlocks: 30,
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
        x: getRandom(0, this.state.horizontalBlocks - 1),
        y: getRandom(0, this.state.verticalBlocks - 1),
        remaining: true
      });
    }
  }

  // totalMushrooms = Math.round(
  //   (this.state.horizontalBlocks + this.state.verticalBlocks) / 2
  // );
  totalMushrooms = 3;

  eatMushroom = foundMushroom => {
    const updatedMushrooms = this.state.mushrooms;
    updatedMushrooms[foundMushroom.key].remaining = false;
    this.setState({
      mushrooms: updatedMushrooms,
      score: this.state.score + 1
    });

    if (this.totalMushrooms === this.state.score) {
      alert("Score: " + this.state.score);
      this.props.history.push("/score");
    }
  };

  render() {
    const styles = {
      width: this.state.horizontalBlocks * this.state.blockWidth + "px",
      height: this.state.verticalBlocks * this.state.blockHeight + "px",
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
            boardDetails={this.state}
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

export default Board;
