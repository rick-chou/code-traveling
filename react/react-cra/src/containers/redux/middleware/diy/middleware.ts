import { addCounter } from './store';
import { wait } from '@/utils';

export const addCounterAsync = (payload: number) => {
  wait(1000);
  return addCounter(payload);
};
