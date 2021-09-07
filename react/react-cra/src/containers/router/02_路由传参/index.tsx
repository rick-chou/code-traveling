import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';

function Home(props: RouteComponentProps<{}, {}, { isHome: boolean }>) {
  console.log('isHome :>> ', props.location.state?.isHome);
  return <h1>Home</h1>;
}

function Article(props: RouteComponentProps<{ id: string }>) {
  return <h1>Article:{props.match.params.id}</h1>;
}

export default function article() {
  return (
    <Router>
      <Link
        to={{
          pathname: '/home',
          state: { isHome: true },
        }}>
        home
      </Link>
      <Link to='/article/:id'>article</Link>

      <Route component={Home} path='/home' />
      <Route component={Article} path='/article/:id' />
    </Router>
  );
}
