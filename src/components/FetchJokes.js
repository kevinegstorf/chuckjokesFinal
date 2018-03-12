import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setJokes } from '../actions';

class FetchJokes extends Component {
  constructor() {
    super();

    this.state = {
      jokes: ''
    };
  }

  fetch() {
    const url = `http://api.icndb.com/jokes/random/10`;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        this.props.setJokes(json.value);
      });
  }

  render() {
    return (
      <div>
        <p className="intro-txt">Hit Submit to RoundHouse kick some jokes in!</p>
        <Button className="btn-danger" onClick={() => this.fetch()}>
          Submit
        </Button>
      </div>
    );
  }
}

export default connect(null, { setJokes })(FetchJokes);
