import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Article() {
  return <h1>Article</h1>;
}

export default function article() {
  return (
    <Router>
      <Link to='/home'>home</Link>
      <Link to='/article'>article</Link>

      <Route component={Home} path='/home' />
      <Route component={Article} path='/article' />
    </Router>
  );
}
