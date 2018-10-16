import React, { Component } from 'react';
import FordQuoteComponent from './FordQuoteComponent';
import MouseComponent from './MouseComponent'
import CatComponent from './CatComponent'

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <FordQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
