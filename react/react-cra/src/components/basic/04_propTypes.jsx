import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    nickname: PropTypes.string.isRequired,
    age: PropTypes.number,
  };

  static defaultProps = {
    nickname: 'nanshu',
    age: 18,
  };

  render() {
    return (
      <div>
        <h1>{this.props.nickname}</h1>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
}
