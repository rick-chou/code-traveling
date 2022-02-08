import React, { Component } from 'react';
import { Button } from 'antd';

interface IProps {}

interface IState {
  count: number;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount执行了');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount执行了');
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate执行了');
  }

  render() {
    return (
      <>
        <h1>LifeCycle</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </Button>
      </>
    );
  }
}

export default App;
