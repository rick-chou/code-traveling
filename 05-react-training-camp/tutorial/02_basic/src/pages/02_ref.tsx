import React, { Component } from 'react';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <>
        {/* 方式一 dom在current属性里 */}
        <input
          ref={this.inputRef}
          onChange={() => console.log(this.inputRef.current)}
        />

        {/* 方式二 dom直接在创建的ref里 */}
        <input
          ref={(inputRef) => (this.inputRef = inputRef as any)}
          onChange={() => console.log(this.inputRef)}
        />
      </>
    );
  }
}

export default App;
