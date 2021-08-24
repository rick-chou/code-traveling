import React, { Component } from 'react';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>App</h1>;
  }
}

export default App;
