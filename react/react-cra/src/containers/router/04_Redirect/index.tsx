import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

const isLogin = true;

export default function article() {
  return (
    <Router>
      {isLogin ? <Route component={Home} path='/' exact /> : <Redirect to='/login' />}
      <Route component={Login} path='/login' />
    </Router>
  );
}
