import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Article() {
  return <h1>Article</h1>;
}

function NoMatch() {
  return <h1>404</h1>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Article} path='/article' />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
