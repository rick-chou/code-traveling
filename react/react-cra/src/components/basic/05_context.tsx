import React, { Component } from 'react';

interface IProps {
  header?: string;
}

interface IState {
  header?: string;
}

/*
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      header: '这是Header组件需要的内容',
    };
  }
  render() {
    return <HeaderWrapper header={this.state.header} />;
  }
}

class HeaderWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <Header {...this.props} />;
  }
}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>{this.props.header}</h1>;
  }
}
*/

// step1 创建一个context 可以创建多个
const HeaderContext = React.createContext({
  header: '这是Header组件需要的内容',
});

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // step2 在顶层组件提供Provider 将context传递给所有子组件
      <HeaderContext.Provider value={{ header: '这是Header组件需要的内容' }}>
        <HeaderWrapper />
        <FunHeader />
      </HeaderContext.Provider>
    );
  }
}

// 此时 我们的HeaderWrapper组件就是干净的 不再需要传递它不需要的props
// 但是 如果需要 该组件也可以在context中拿到值
class HeaderWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <Header {...this.props} />;
  }
}

class Header extends Component<IProps, IState> {
  // step3 在需要使用的地方 将contentType赋值成我们需要的那个context
  static contextType = HeaderContext;
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    // step 4 使用 🥰
    return <h1>{this.context.header}</h1>;
  }
}

function FunHeader() {
  return <HeaderContext.Consumer>{value => <h1>{value.header}</h1>}</HeaderContext.Consumer>;
}

export default App;
