/**
 * 生成一个生产者 producer
 */
import { produce } from 'immer';
const immer = () => {
  const currentState = {
    name: 'nanshu',
    hobby: {
      color: 'sky blue',
      food: 'eggs',
    },
  };
  // const producer = produce(draft => {
  //   draft.name = 'chou';
  // });
  // const nextState = producer(currentState);

  const producer = produce((draft, name) => {
    draft.name = name;
  });
  const nextState = producer(currentState, 'chou');

  console.log(`nextState`, nextState);
};

export default immer;
