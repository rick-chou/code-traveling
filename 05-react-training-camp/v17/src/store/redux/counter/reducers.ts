import * as TYPES from './actionTypes';
import { IAction } from '@type/index';

const defaultState = {
  count: 0,
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case TYPES.ADD_COUNT: {
      return { ...state, count: state.count + 1 };
    }
    case TYPES.SUB_COUNT: {
      return { ...state, count: state.count - action.payload };
    }
    default:
      return state;
  }
};
