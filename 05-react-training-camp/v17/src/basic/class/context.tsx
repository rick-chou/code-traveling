/**
 * --App
 * ----|ToolBar
 * ------|ThemeBar
 *
 * 1.const ThemeContext = React.createContext(xxx)
 * 2.ThemeContext.Provider 包裹所有自组件
 * 3.子组件中使用static contextType = ThemeContext 使用this.context
 */

import { Button } from 'antd';
import React from 'react';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext<string>('light');
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value='dark'>
        <p>
          <b>step1 const ThemeContext = React.createContext(xxx)</b>
        </p>
        <p>
          <b>step2 ThemeContext.Provider 包裹所有自组件</b>
        </p>
        <p>
          <b>step3 子组件中使用static contextType = ThemeContext 使用this.context</b>
        </p>
        <hr />
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    // console.log(this.context); // -> dark
    return (
      <Button style={{ backgroundColor: this.context === 'light' ? 'white' : 'gray' }}>
        ThemedButton
      </Button>
    );
  }
}

export default App;
