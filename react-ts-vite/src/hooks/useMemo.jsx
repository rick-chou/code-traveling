/**
 * useMemo
 * 有一个父组件，其中包含子组件，子组件接收一个对象作为props；
 * 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
 * 我们可以借助useMemo来返回函数，然后把这个对象作为props传递给子组件；这样，子组件就能避免不必要的更新
 * useMemo(()=>({}),[])
 * 第一个参数 是一个函数 返回一个对象
 * 第二个参数 是一个数组 包含了这个对象的依赖项 只有依赖项更新 函数才会重新执行
 */

import React, { useState, useMemo, memo } from 'react';

// 接收的是基本数据类型 memo生效
const Child = memo((props) => {
  const { age } = props;
  console.log('子组件渲染了');
  return (
    <div>
      <p>age:{age}</p>
    </div>
  );
});

// 父组件中没有使用useMemo 子组件的memo失效
const Child1 = memo((props) => {
  const { stu1 } = props;
  console.log('未使用useMemo');
  return (
    <div>
      <p>stu1</p>
      <p>
        {stu1.name}:{stu1.age}
      </p>
    </div>
  );
});

// 父组件中使用了useMemo 子组件的memo生效
const Child2 = memo((props) => {
  const { stu2 } = props;
  console.log('使用useMemo');
  return (
    <div>
      <p>stu1</p>
      <p>
        {stu2.name}:{stu2.age}
      </p>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  const stu1 = {
    name: 'chou',
    age,
  };

  const stu2 = useMemo(
    () => ({
      name: 'chou',
      age,
    }),
    [age]
  );

  return (
    <div>
      <Child age={age} />
      <Child1 stu1={stu1} />
      <Child2 stu2={stu2} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setAge(age + 1)}>change age</button>
    </div>
  );
}
