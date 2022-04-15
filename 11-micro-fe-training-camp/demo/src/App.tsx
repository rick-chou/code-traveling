import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '@/pages/layout';

export default () => (
  <Router>
    <Route path="*" component={Layout} />
  </Router>
);
