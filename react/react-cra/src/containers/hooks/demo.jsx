import React, { Component } from 'react';

class ProfilePageClassComponent extends Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

function ProfilePageFunComponent(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Follow</button>;
}

export default class App extends React.Component {
  state = {
    user: 'nanshu',
  };
  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select value={this.state.user} onChange={e => this.setState({ user: e.target.value })}>
            <option value='nanshu'>nanshu</option>
            <option value='chou'>chou</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunComponent user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClassComponent user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>Can you spot the difference in the behavior?</p>
      </>
    );
  }
}
