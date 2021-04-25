import { MODIFY_COUNTER } from './actionTypes';

export const modifyCounter = (payload) => ({
  type: MODIFY_COUNTER,
  payload,
});
