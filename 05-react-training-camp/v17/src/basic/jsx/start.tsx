const markdownText = `
~~~tsx
const App = () => {
  return <h1>Hello React</h1>;
};
~~~
`;

import { Markdown } from '@/components';

const App = () => {
  return (
    <>
      <Markdown children={markdownText} title="jsx start" />
      <h1>Hello React</h1>
    </>
  );
};

export default App;
