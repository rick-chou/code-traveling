import { MODIFY_COUNTER } from './actionTypes';

const defaultState = {
  counter: 0,
};

const state = (state = defaultState, action) => {
  switch (action.type) {
    case MODIFY_COUNTER: {
      const { counter } = action.payload;
      return { ...state, counter };
    }
    default:
      return state;
  }
};

export default state;
