import React from 'react';

const HeaderContext = React.createContext({
  header: '这是Header组件需要的内容',
});

const App = (props) => {
  return <div>App</div>;
};

const Demo2 = () => {
  return (
    <HeaderContext.Provider value={{ header: '这是Header组件需要的内容' }}>
      <App />
    </HeaderContext.Provider>
  );
};

export default Demo2;
