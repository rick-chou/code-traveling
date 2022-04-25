const markdownText = `
~~~tsx
const App = () => {
  return (
    // class 用 className 代替
    <div className="main">
      <h1>{new Date().toString()}</h1>
      {/* label 标签的for 用 htmlFor 代替 */}
      <label htmlFor="password">
        password
        <input type="text" id="password" />
      </label>
    </div>
  );
};
~~~
`;

import { Markdown } from '@nanshu/ui';

const App = () => {
  return (
    // class 用 className 代替
    <div className="main">
      <Markdown children={markdownText} title="jsx特殊点" />
      <h1>{new Date().toString()}</h1>
      {/* label 标签的for 用 htmlFor 代替 */}
      <label htmlFor="password">
        password
        <input type="text" id="password" />
      </label>
    </div>
  );
};

export default App;
