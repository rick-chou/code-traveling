/**
 * useRef
 * 获取结点
 * 保存数据
 */

import React, { FC, useRef, useState } from 'react';
import { Button, Input } from 'antd';
import JSONTree from '@components/jsonTree';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const numRef = useRef<number>(count);
  const domRef = useRef<HTMLInputElement | null>(null);
  const antdRef = useRef<Input | null>(null);

  return (
    <div>
      <input defaultValue='h5' ref={domRef} />
      <JSONTree data={domRef} />
      <Input defaultValue='antd' ref={antdRef} style={{ width: 200 }}></Input>
      <JSONTree data={antdRef} />
      <hr />

      <p>count : {count}</p>
      {/* numRef的值始终引用最初的那个count */}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
      <br />
      <br />
      <p>
        <b>numRef的值始终引用最初的那个count</b>
      </p>
    </div>
  );
};

export default App;
