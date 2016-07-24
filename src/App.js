import React, { Component } from 'react';

import getParameterFromUrl from './utilities/getParameterFromUrl';
import './App.css';
import LETTERS from './constants/letters';

class App extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    const url = window.location.href;
    const _message = getParameterFromUrl('q', url);
    this.setState({message: _message});
  }

  setMessage = (letter) => {
    let {message} = this.state;
    let _message = message += letter
    this.setState({
      message: _message
    });

    const url = `?q=${_message}`;
    window.history.replaceState({}, '', url);
  }

  handleLetterClick = (letter) => {
    this.setMessage(letter);
  }

  render() {
    const {message} = this.state;

    return (
      <div className="App mono">
        <h2
          className="flex items-center justify-center m0"
          style={{height: '3rem'}}
          >
          {message}
        </h2>
        <ul className="List list-reset m0">
          {LETTERS.map((letter, index) => {
            let boundClick = this.handleLetterClick.bind(this, letter);
            return (
              <li
                className="ListItem inline-block"
                key={index}
                >
                <button
                  className="Letter caps bold h2 p2 rounded mono"
                  onClick={boundClick}
                  >
                  {letter}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
