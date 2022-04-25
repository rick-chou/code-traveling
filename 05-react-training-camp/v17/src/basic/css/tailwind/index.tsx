const markdownText = `
~~~jsx
const App = () => {
  return (
    <>
      <div className="text-4xl">tailwind css</div>
    </>
  );
};
~~~
`;

import { Markdown } from '@nanshu/ui';

const App = () => {
  return (
    <>
      <Markdown children={markdownText} title="tailwind css" />
      <div className="text-4xl">tailwind css</div>
    </>
  );
};

export default App;
