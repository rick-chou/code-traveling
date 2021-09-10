import { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { store, addCounter, subCounter } from './store';

export default function Counter() {
  const [payload, setPayload] = useState<number>(1);
  const [count, setCount] = useState<number>(store.getState().count);
  const { dispatch } = store;
  const _bindActionCreators = bindActionCreators(
    {
      addCounter,
      subCounter,
    },
    dispatch,
  );

  useEffect(() => {
    store.subscribe(() => setCount(store.getState().count));
  });

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => _bindActionCreators.addCounter(payload)}>+</Button>
      <Button>{count}</Button>
      <Button onClick={() => _bindActionCreators.subCounter(payload)}>-</Button>
    </>
  );
}