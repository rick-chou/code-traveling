const markdownText = `
~~~tsx
import { FC } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

const Address: FC = () => <div>Address</div>;
const Culture: FC = () => <div>Culture</div>;

const About: FC = () => {
  return (
    <BrowserRouter>
      <h1 className="text-4xl">About</h1>
      <Link to={'/basic/router/v5-address'}>Address</Link>
      <Link to={'/basic/router/v5-culture'}>Culture</Link>

      {/* 匹配成功时 渲染组件component */}
      <Route component={Address} path="/basic/router/v5-address" />

      {/* 匹配成功时 执行render方法 */}
      <Route render={() => <Culture />} path="/basic/router/v5-culture" />

      {/* 匹配成功时 match为路由信息 可通过match来动态渲染 */}
      <Route
        children={({ match }) => (match ? <h1>Yep</h1> : <h1>Ops</h1>)}
        path="/basic/router/v5-culture"
      />
    </BrowserRouter>
  );
};

export default About;
~~~
`;

import { FC } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import { Markdown } from '@nanshu/ui';

const Address: FC = () => <div>Address</div>;
const Culture: FC = () => <div>Culture</div>;

const About: FC = () => {
  return (
    <BrowserRouter>
      <Markdown children={markdownText} title="Route组件" />
      <h1 className="text-4xl">About</h1>
      <Link to={'/basic/router/v5-address'}>Address</Link>
      <Link to={'/basic/router/v5-culture'}>Culture</Link>

      {/* 匹配成功时 渲染组件component */}
      <Route component={Address} path="/basic/router/v5-address" />

      {/* 匹配成功时 执行render方法 */}
      <Route render={() => <Culture />} path="/basic/router/v5-culture" />

      {/* 匹配成功时 match为路由信息 可通过match来动态渲染 */}
      <Route
        children={({ match }) => (match ? <h1>Yep</h1> : <h1>Ops</h1>)}
        path="/basic/router/v5-culture"
      />
    </BrowserRouter>
  );
};

export default About;
