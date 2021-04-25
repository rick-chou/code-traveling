import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routerConfig from '@router';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routerConfig.map((item, index) => {
            const { path, component, exact } = item;
            return (
              <Route
                key={index}
                path={path}
                component={component}
                exact={exact}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
