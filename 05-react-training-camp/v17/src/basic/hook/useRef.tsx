import { FC, useRef, useState } from 'react';
import { Button } from 'antd';

import { JsonTree, Markdown } from '@nanshu/ui';

const markdownText = `
~~~tsx
const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const numRef = useRef<number>(count);
  const domRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <Markdown children={markdownText} title="useRef" />
      <input defaultValue="useRef" ref={domRef} />
      <JsonTree data={{domRef}} />
      <p>count : {count}</p>

      {/* numRef的值始终引用最初的那个count 不会随着count的变化而变化*/}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
      <br />
      <br />
      <br />
      <p>
        <b>numRef的值始终引用最初的那个count</b>
      </p>
    </div>
  );
};

export default App;
~~~
`;

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const numRef = useRef<number>(count);
  const domRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <Markdown children={markdownText} title="useRef" />
      <input defaultValue="useRef" ref={domRef} />
      <JsonTree data={{ domRef }} />
      <p>count : {count}</p>

      {/* numRef的值始终引用最初的那个count 不会随着count的变化而变化*/}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
      <br />
      <br />
      <br />
      <p>
        <b>numRef的值始终引用最初的那个count</b>
      </p>
    </div>
  );
};

export default App;
