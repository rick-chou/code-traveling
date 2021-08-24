import React, { Component } from 'react';

interface IProps {
  theme?: string;
}

interface IState {
  theme?: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HeaderWrapper />
        <ArticleWrapper />
      </>
    );
  }
}

class Header extends Component<IProps, IState> {
  render() {
    return <p style={{ color: this.props.theme }}>NavBar</p>;
  }
}

class Article extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>Article</p>;
  }
}

// 增强props  泛型T表示接收组件的props 因为我们需要注入新的props 所以T需要继承拥有新属性的接口
function ThemeHOC<T extends IProps>(Component: React.ComponentType<T>) {
  return class extends React.Component {
    render() {
      // 为组件注入theme属性
      return <Component {...(this.props as T)} theme={'red'} />;
    }
  };
}

// 劫持生命周期方法 props state render方法
function LifeHOC<T>(Component: React.ComponentType<T>) {
  return class extends React.Component {
    constructor(props: T) {
      super(props);

      // 劫持到原组件的实例 并可以修改它
      console.log(this);

      // 可操作所有传入的props
      // 可操作组件的生命周期
      // 可操作组件的static方法
      // 获取refs
      // 可操作state
      // 可以渲染劫持
    }
    render() {
      return <Component {...(this.props as T)} />;
    }
  };
}

const HeaderWrapper = ThemeHOC(Header);
const ArticleWrapper = LifeHOC(Article);

export default App;
