import { FC, useRef, useState } from 'react';
import { Button } from 'antd';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const numRef = useRef<number>(count);
  const domRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input defaultValue="useRef" ref={domRef} />
      <p>count : {count}</p>
      {/* numRef的值始终引用最初的那个count 不会随着count的变化而变化*/}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
    </div>
  );
};

export default App;
