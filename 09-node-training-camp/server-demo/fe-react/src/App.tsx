import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@pages/home';
import Login from '@pages/login';
import Content from '@pages/content';
import NotFound from '@pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/content" component={Content} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
