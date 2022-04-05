const markdownText = `
~~~tsx
/**
 * useContext
 * 可以在子组件之间共享数据
 * 1)在组件外创建context对象 const AppContext = React.createContext({})
 * 2)父组件内使用context对象下的Provider 并赋值
 * 3)在子组件内使用context对象 React.useContext(AppContext)
 */

import React from 'react';

interface ITheme {
  theme: string;
}

const AppContext = React.createContext<ITheme>({
  theme: 'red',
});

const NavBar = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>NavBar</h2>;
};

const Message = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>Message</h2>;
};

export default function App() {
  return (
    <AppContext.Provider value={{ theme: 'red' }}>
      <NavBar />
      <Message />
    </AppContext.Provider>
  );
}
~~~
`;

import React from 'react';

import { Markdown } from '@components';

interface ITheme {
  theme: string;
}

const AppContext = React.createContext<ITheme>({
  theme: 'red',
});

const NavBar = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>NavBar</h2>;
};

const Message = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>Message</h2>;
};

export default function App() {
  return (
    <AppContext.Provider value={{ theme: 'red' }}>
      <Markdown children={markdownText} title="useContext" />
      <NavBar />
      <Message />
    </AppContext.Provider>
  );
}
