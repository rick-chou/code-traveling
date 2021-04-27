import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@router/index';
const App: FC = () => {
  return <Router>{renderRoutes(routes)}</Router>;
};

export default App;
