import React from 'react';
import { connect } from 'react-redux';
import store from '@store';
let Counter = () => {
  return <div>123</div>;
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  modifyCounter: (payload) => dispatch.store.modifyCounter(payload),
});

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterWrapper = () => {
  return (
    <div store={store}>
      <Counter />
    </div>
  );
};

export default CounterWrapper;
