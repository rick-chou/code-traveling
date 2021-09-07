import { useState } from 'react';
import { Button, Input } from 'antd';
import { connect, Provider } from 'react-redux';
import { store, increment, decrement, IStore } from './store';

interface IProps {
  count: number;
  increment: any;
  decrement: any;
}

function Counter(props: IProps) {
  const { increment, decrement, count } = props;

  const [payload, setPayload] = useState<number>(1);

  const { dispatch } = store;

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => dispatch(increment(payload))}>+</Button>
      <Button>{count}</Button>
      <Button onClick={() => dispatch(decrement(payload))}>-</Button>
    </>
  );
}

const mapDispatchToProps = () => ({
  increment: (payload: number) => increment(payload),
  decrement: (payload: number) => decrement(payload),
});

const mapStateToProps = (store: IStore) => ({
  count: store.count,
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function Root() {
  return (
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  );
}
