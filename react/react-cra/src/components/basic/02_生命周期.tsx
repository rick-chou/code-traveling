import React, { Component } from 'react';

interface IProps {}

interface IState {}

class LifeCycle extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>LifeCycle</h1>;
  }
}

export default LifeCycle;
