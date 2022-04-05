import { Button, Tag } from 'antd';
import React, { useState, useEffect, memo } from 'react';

interface IProps {
  arr?: Array<number>;
  str?: string;
}

const Child = (props: IProps) => {
  useEffect(() => {
    console.log('不使用memo的子组件更新了');
  });

  return (
    <div>
      <h1>子组件</h1>
      <h2>{props.str}</h2>
    </div>
  );
};

const MemoChild = memo((props: IProps) => {
  useEffect(() => {
    console.log('memo子组件更新了');
  });

  return (
    <div>
      <h1>子组件</h1>
      <h2>{props.str}</h2>
    </div>
  );
});

const Parent = () => {
  const [str, setStr] = useState<string>('hello');
  const [arr, setArr] = useState<Array<number>>([1, 2, 3]);

  useEffect(() => {
    console.log('父组件更新了');
  });

  return (
    <div>
      <h1>父组件</h1>
      {arr.map((item, idx) => {
        return <Tag key={idx}>{item}</Tag>;
      })}
      <div>
        <Button onClick={() => setArr([...arr, arr.length + 1])}>
          改变子组件不需要的属性
        </Button>
        <Button onClick={() => setStr('world')}>改变子组件需要的属性</Button>
        <Child str={str} />
        <MemoChild str={str} />
      </div>
    </div>
  );
};

export default Parent;
