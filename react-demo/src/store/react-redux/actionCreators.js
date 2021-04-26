import { MODIFY_COUNTER } from './actionTypes';

export const modifyCounter = (counter) => ({
  type: MODIFY_COUNTER,
  counter,
});
