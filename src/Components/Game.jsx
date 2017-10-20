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
      totalTime: 0,
      steps: 0
    };
  }

  setBlocks = (horizontal, vertical) => {
    this.setState({
      horizontalBlocks: horizontal,
      verticalBlocks: vertical
    });
  }

  setTotalTime = (startTime, steps) => {
    const totalTime = new Date().getTime() - startTime;
    this.setState({ totalTime, steps });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={this.renderHome} exact />
          <Route path="/board" render={this.renderBoard} />
          <Route path="/score" render={this.renderScore} />
        </div>
      </Router>
    );
  }

  renderHome = () => <Home setBlocks={this.setBlocks} {...this.state} />;
  renderBoard = () => <Board setTotalTime={this.setTotalTime} {...this.state} />;
  renderScore = () => <Score {...this.state} />;
}

export default Game;
