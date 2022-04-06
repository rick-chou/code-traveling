import * as ACTIONS from './actionTypes';

export const addCount = () => ({
  type: ACTIONS.ADD_COUNT,
});

export const _subCount = (payload: number) => ({
  type: ACTIONS.SUB_COUNT,
  payload,
});

export const subCount = (payload: number) => {
  return (dispatch: any, getState: any) =>
    setTimeout(() => {
      dispatch(_subCount(payload));
    }, 1000);
};
