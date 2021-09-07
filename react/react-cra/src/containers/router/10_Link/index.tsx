import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function article() {
  return (
    <Router>
      <Link to='/home'>home</Link>
      <Link to='/about'>about</Link>

      <br />

      <NavLink to='/home' activeStyle={{ color: 'red' }}>
        home
      </NavLink>
      <NavLink to='/about'>about</NavLink>

      <Route component={Home} path='/home' />
      <Route component={About} path='/about' />
    </Router>
  );
}
