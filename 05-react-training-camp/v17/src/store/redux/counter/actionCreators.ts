import * as ACTIONS from './actionTypes';

export const addCount = () => ({
  type: ACTIONS.ADD_COUNT,
});

export const subCount = (payload: number) => ({
  type: ACTIONS.SUB_COUNT,
  payload,
});
