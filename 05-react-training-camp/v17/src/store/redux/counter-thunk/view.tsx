import { connect, Provider } from 'react-redux';
import * as ACTIONS from './actionCreators';
import store from '.';
import { Button } from 'antd';

interface IProps {
  count: number;
  handleCountAdd: () => void;
  handleCountSub: (payload: number) => void;
}

const Counter = (props: IProps) => {
  const { count, handleCountAdd, handleCountSub } = props;

  return (
    <div>
      <h1>Counter : {count}</h1>
      <br />
      <Button onClick={handleCountAdd}>+1</Button>
      <Button onClick={() => handleCountSub(1)}>-1</Button>
      <Button onClick={() => handleCountSub(5)}>-5</Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleCountAdd: () => dispatch(ACTIONS.addCount()),
  handleCountSub: (payload: number) => dispatch(ACTIONS.subCount(payload)),
});

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);

const App = () => {
  return (
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  );
};

export default App;
