import React from 'react';
import { connect, Provider } from 'react-redux';
import { Button } from 'antd';
import store from '@store/react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '@store/react-redux/actionCreators';
let Counter = ({ counter, actions }) => {
  return (
    <>
      <div>{counter}</div>
      <Button onClick={() => actions.modifyCounter(1)}>+1</Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});
// const mapDispatchToProps = (dispatch) => ({
//   modifyCounter: (payload) => dispatch(Actions.modifyCounter(payload)),
// });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterWrapper = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default CounterWrapper;
