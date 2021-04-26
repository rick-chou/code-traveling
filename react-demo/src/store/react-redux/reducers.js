import { MODIFY_COUNTER } from './actionTypes';

const defaultState = {
  counter: 0,
};

const state = (state = defaultState, action) => {
  switch (action.type) {
    case MODIFY_COUNTER: {
      let { counter } = action;
      counter += state.counter;
      return { ...state, counter };
    }
    default:
      return state;
  }
};

export default state;
