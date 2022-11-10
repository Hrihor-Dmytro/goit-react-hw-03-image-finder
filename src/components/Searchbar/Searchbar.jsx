import { Component } from 'react';
// import { PropTypes } from 'prop-types';

export class Searchbar extends Component {
  state = {
    name: '',
  };
  handleNameChenge = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDafault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleNameChenge}
        />
      </form>
    );
  }
}
