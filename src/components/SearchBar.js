import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.handleInput}
        />
        {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
