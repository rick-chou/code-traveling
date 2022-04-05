const markdownText = `
~~~tsx
const App = () => <h1 onClick={() => alert('hello')}>sayHello</h1>;
~~~
`;

import { Markdown } from '@/components';

const App = () => (
  <>
    <Markdown children={markdownText} title="事件绑定" />
    <h1 onClick={() => alert('hello')}>sayHello</h1>
  </>
);

export default App;
