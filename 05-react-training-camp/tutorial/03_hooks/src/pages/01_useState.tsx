import React, { useState } from 'react';
import { Button } from 'antd';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // 普通调用
  const addCount = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // 回调函数
  const addCountWithCallback = () => {
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };

  return (
    <>
      <h1>{`count:${count}`}</h1>

      {/* 会合并成一个 每次只 +1 */}
      <Button onClick={addCount}>我要打两个</Button>

      {/* 每次都会取到最新的值 每次 +2  */}
      <Button onClick={addCountWithCallback}>我也要打两个</Button>
    </>
  );
};

export default Counter;
