/**
 * useCallback
 * 有一个父组件，其中包含子组件，子组件接收一个函数作为props；
 * 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
 * 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新
 * useCallback(()=>{},[])
 * 第一个参数 是一个函数
 * 第二个参数 是一个数组 是这个函数的依赖项 只有依赖项更新 函数才会重新执行
 */

import React, { useState, useCallback, memo } from 'react';

const Child1 = memo((props) => {
  const { getSum1 } = props;
  console.log('我是子组件 在父组件中没使用useCallback');
  return (
    <div>
      <button onClick={getSum1}>Child1</button>
    </div>
  );
});

const Child2 = memo((props) => {
  const { getSum2 } = props;
  console.log('我是子组件 在父组件中使用了useCallback');
  return (
    <div>
      <button onClick={getSum2}>Child2</button>
    </div>
  );
});

export default function App() {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  const getSum1 = () => {
    console.log('getSum1方法执行了');
    let sum = 0;
    for (let i = 0; i < max; i++) {
      sum += i;
    }
    return sum;
  };

  // 这样使用并不会造成任何的性能优化 甚至有可能会浪费性能 因为会比上一种方法有更多的函数被创建
  const getSum2 = useCallback(() => {
    console.log('getSum2方法执行了');
    let sum = 0;
    for (let i = 0; i < max; i++) {
      sum += i;
    }
    return sum;
  }, [max]);

  return (
    <div>
      <p>sum : {getSum1()}</p>
      <p>sum : {getSum2()}</p>
      <p>num : {num}</p>
      <button onClick={() => setNum(num + 1)}>change num</button>
      <button onClick={() => setMax((pre) => pre * 10)}>change max</button>
      <Child1 getSum1={getSum1} />
      <Child2 getSum2={getSum2} />
    </div>
  );
}
