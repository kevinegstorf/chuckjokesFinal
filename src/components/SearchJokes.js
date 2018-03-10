import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setJokes } from '../actions';

class SearchJokes extends Component {
  constructor() {
    super();

    this.state = {
      jokes: ''
    }
  }

  search() {
    const url = `http://api.icndb.com/jokes/random/10`;
    
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        this.props.setJokes(json.value)
      });
  }

  render() {
    return (
      <Form inline>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { setJokes})(SearchJokes);