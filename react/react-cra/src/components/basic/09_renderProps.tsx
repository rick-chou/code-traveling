import React, { Component } from 'react';

interface IProps {
  mouse?: any;
  render?: any;
}

interface IState {
  x: number;
  y: number;
}

class Cat extends Component<IProps, IState> {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src='/cat.jpg' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='' />
    );
  }
}

class Mouse extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: any) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={(mouse: any) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
