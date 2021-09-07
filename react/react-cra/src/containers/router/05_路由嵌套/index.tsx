import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Article() {
  return (
    <>
      <h1>Article</h1>
      <Link to='/article/a'>a</Link>
      <Link to='/article/b'>b</Link>

      <Route component={A} path='/article/a' />
      <Route component={B} path='/article/b' />
    </>
  );
}

function A() {
  return <h1>A</h1>;
}

function B() {
  return <h1>B</h1>;
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
