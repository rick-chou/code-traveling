import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './router';

export default function article() {
  return (
    <Router>
      <Link to='/'>home</Link>
      <Link to='/article'>article</Link>

      {renderRoutes(routes)}
    </Router>
  );
}
