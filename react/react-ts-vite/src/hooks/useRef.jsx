/**
 * useRef
 * 获取结点
 * 保存数据
 */

import React, { useRef, useState } from 'react';

export default function App() {
  const dataRef = useRef();

  // 获取结点
  function showRef() {
    console.log(dataRef.current);
  }

  // 保存数据 在整个过程中可以保持不变

  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  return (
    <div>
      <input defaultValue="hello" ref={dataRef} />
      <button onClick={() => showRef()}>showRef</button>
      <p>count : {count}</p>
      {/* numRef的值始终引用最初的那个count */}
      <p>numRef : {numRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
