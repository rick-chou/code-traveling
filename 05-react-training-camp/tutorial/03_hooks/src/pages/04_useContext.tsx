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
