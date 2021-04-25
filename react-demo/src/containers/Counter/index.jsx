import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '@store/react-redux';
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
      <Provider>
        <Counter />
      </Provider>
    </div>
  );
};

export default CounterWrapper;
