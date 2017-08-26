import React, { Component } from "react";

import Player from "./Player.jsx";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalBlocks: 50,
      verticalBlocks: 30,
      blockWidth: 30,
      blockHeight: 30
    };
  }

  render() {
    const styles = {
      width: this.state.horizontalBlocks * this.state.blockWidth + "px",
      height: this.state.verticalBlocks * this.state.blockHeight + "px",
      background: "white",
      border: "1px solid black"
    };

    return (
      <div>
        <h1>MARIO - Play</h1>
        <hr />
        <div style={styles}>
          <Player boardDetails={this.state} />
        </div>
      </div>
    );
  }
}

export default Board;
