import React, { Component } from 'react';
import FetchJokes from './FetchJokes';
import JokeList from './JokeList';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Chuck Jokes</h2>
        <FetchJokes />
        <JokeList />
      </div>
    );
  }
}

export default App;
