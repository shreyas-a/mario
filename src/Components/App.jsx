import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home.jsx';
import Board from './Board.jsx';
import Score from './Score.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/score" component={Score} />
        </div>
      </Router>
    );
  }
}

export default App;
