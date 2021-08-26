import { useState } from 'react';
import { Button, Input } from 'antd';
import { connect, Provider } from 'react-redux';
import { store, addCounterAsync, subCounter, IStore } from './store';

interface IProps {
  count: number;
  addCounterAsync: any;
  subCounter: any;
}

function Counter(props: IProps) {
  const { addCounterAsync, subCounter, count } = props;

  const [payload, setPayload] = useState<number>(1);

  const { dispatch } = store;

  return (
    <>
      <Input value={payload} onChange={v => setPayload(parseInt(v.target.value))} />
      <Button onClick={() => dispatch(addCounterAsync(payload))}>+</Button>
      <Button>{count}</Button>
      <Button onClick={() => dispatch(subCounter(payload))}>-</Button>
    </>
  );
}

const mapDispatchToProps = () => ({
  addCounterAsync: (payload: number) => addCounterAsync(payload),
  subCounter: (payload: number) => subCounter(payload),
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
