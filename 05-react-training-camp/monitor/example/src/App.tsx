import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '@/pages';

const App = () => (
  <BrowserRouter>
    <Route path="*" component={Layout} />
  </BrowserRouter>
);

export default App;
