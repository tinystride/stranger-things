import React, { Component } from 'react';
import './App.css';

import LETTERS from './constants/letters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>stranger things</h1>
        <ul className="list-reset List">
          {LETTERS.map((letter, index) => {
            return (
              <li
                className="ListItem bold inline-block p1 caps"
                key={index}
                >
                {letter}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
