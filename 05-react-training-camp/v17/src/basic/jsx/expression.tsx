const markdownText = `
~~~tsx
const App = () => <h1>{new Date().toString()}</h1>;
~~~
`;

import { Markdown } from '@/components';

const App = () => (
  <>
    <Markdown children={markdownText} title="jsx表达式" />
    <h1>{new Date().toString()}</h1>
  </>
);

export default App;
