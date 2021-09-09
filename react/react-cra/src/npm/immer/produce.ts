import { produce } from 'immer';
const immer = () => {
  const currentState = {
    name: 'nanshu',
    hobby: {
      color: 'sky blue',
      food: 'eggs',
    },
  };

  const nextState = produce(currentState, draft => {
    draft.name = 'chou';
  });
  console.log(currentState === nextState); // false
  console.log(currentState.hobby === nextState.hobby); // true

  // const nextState = produce(currentState, draft => {
  //   draft.hobby.color = 'china red';
  // });
  // console.log(currentState === nextState); // false
  // console.log(currentState.hobby === nextState.hobby); // false

  // const nextState = produce(currentState, draft => {
  //   draft.hobby.color = 'china red';
  // });
  // nextState.name = 'chou'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
};
export default immer;
