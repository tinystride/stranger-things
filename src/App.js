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
    if (_message) {
      this.setState({message: _message});
    }
  }

  clearMessage = () => {
    this.setState({message: ''})
    const url = window.location.origin;
    window.history.replaceState({}, '', url);
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

  handleClearClick = () => {
    this.clearMessage()
  }

  render() {
    const {message} = this.state;

    return (
      <div className="App mono">
        <div
          className="relative"
          >
          <h2
            className="flex items-center justify-center m0"
            style={{height: '3rem'}}
            >
            {message}
          </h2>
          {message &&
            <button
              className="absolute unstyled-button ml2 right-0 top-0 h2"
              onClick={this.handleClearClick}
              >
              X
            </button>
          }
        </div>
        <ul className="List list-reset m0">
          {LETTERS.map((letter, index) => {
            let boundClick = this.handleLetterClick.bind(this, letter);
            return (
              <li
                className="ListItem inline-block relative"
                key={index}
                >
                <button
                  className="caps bold h2 p2 rounded mono unstyled-button"
                  onClick={boundClick}
                  >
                  <div
                    className="Light block mx-auto"
                    style={{backgroundColor: 'gray'}}
                    >
                  </div>
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
