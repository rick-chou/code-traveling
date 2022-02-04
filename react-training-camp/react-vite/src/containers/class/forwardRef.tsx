import React, { Component } from 'react';
import JSONTree from 'react-json-tree';

class App extends Component {
  render() {
    return (
      <>
        <Input />
      </>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return <input type='text' ref={this} />;
  }
}

export default App;
