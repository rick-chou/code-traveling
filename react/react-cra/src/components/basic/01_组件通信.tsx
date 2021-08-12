import React, { Component } from 'react';
import { Button } from 'antd';

interface IProps {
  count?: number;
  onClick?: () => void;
}

interface IState {
  count: number;
}

class ChildComponent extends Component<IProps, IState> {
  render() {
    const { count, onClick } = this.props;
    return <Button onClick={onClick}>{count}</Button>;
  }
}

class ParentComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return <ChildComponent count={this.state.count} onClick={this.handleClick} />;
  }
}

export default ParentComponent;
