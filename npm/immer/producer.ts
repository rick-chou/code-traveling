import { produce } from 'immer';
namespace Immer {
  /**
   * 生成一个生产者 producer
   */
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

  const producer = produce((draft: typeof currentState, name: string) => {
    draft.name = name;
  });
  const nextState = producer(currentState, 'chou');

  console.log(`nextState`, nextState);
}
