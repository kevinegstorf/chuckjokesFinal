import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JokeItem from './JokeItem';

class favoriteJokeList extends Component {
  render() {
    console.log('testing favorites', this.props.favoriteJokes);
    return (
      <div>
        <h4 className="link">
          <Link to="/">Home</Link>
        </h4>
        <h2>Favorite Jokes:</h2>
        {this.props.favoriteJokes.map((joke, index) => {
          return <JokeItem key={index} joke={joke} favoriteButton={false} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteJokes: state.favoriteJokes
  };
}

export default connect(mapStateToProps, null)(favoriteJokeList);
