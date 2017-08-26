import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Board from "./Board.jsx";
import Score from "./Score.jsx";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalBlocks: 0,
      verticalBlocks: 0,
      totalTime: null
    };
  }

  setBlocks(horizontal, vertical) {
    this.setState({
      horizontalBlocks: horizontal,
      verticalBlocks: vertical
    });
  }

  setTotalTime(startTime) {
    const totalTime = new Date().getTime() - startTime;
    this.setState({ totalTime });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              <Home setBlocks={this.setBlocks.bind(this)} {...this.state} />}
          />
          <Route
            path="/board"
            render={() =>
              <Board
                setTotalTime={this.setTotalTime.bind(this)}
                {...this.state}
              />}
          />
          <Route path="/score" render={() => <Score {...this.state} />} />
        </div>
      </Router>
    );
  }
}

export default Game;
