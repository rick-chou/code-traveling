import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

export default function article() {
  return (
    <Router>
      <Link to='/home'>home</Link>
      <Link to='/user'>user</Link>
      <Link to='/child'>child</Link>

      {/* 匹配成功时 渲染组件component */}
      <Route component={Home} path='/home' />

      {/* 匹配成功时 执行render方法 */}
      <Route render={() => <h1>hello nanshu</h1>} path='/user' />

      {/* 匹配成功时 match为路由信息 可通过match来动态渲染 */}
      <Route children={({ match }) => (match ? <h1>Yep</h1> : <h1>Ops</h1>)} path='/child' />
    </Router>
  );
}
