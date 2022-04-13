import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@/pages/home';
import Layout from '@/pages/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="*" component={Layout} />
    </BrowserRouter>
  );
};

export default App;
