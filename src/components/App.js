import React, { Component } from 'react';
import SearchJokes from './SearchJokes';
import JokeList from './JokeList';
import '../styles/index.css';


class App extends Component {
  render () {
    return (
      <div>
        <h2>Chuck Jokes</h2>
        <SearchJokes/>
        <JokeList />
      </div>
    )
  }
}

export default App
