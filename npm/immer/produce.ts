import { produce } from 'immer';
namespace Immer {
  const currentState = {
    name: 'nanshu',
    hobby: {
      color: 'sky blue',
      food: 'eggs',
    },
  };

  // draft是一个currentState的复制
  const nextState = produce(currentState, (draft: typeof currentState) => {
    draft.name = 'chou';
  });
  console.log(currentState === nextState); // false
  console.log(currentState.hobby === nextState.hobby); // true

  // 共享相同的属性
  // const nextState = produce(currentState, draft => {
  //   draft.hobby.color = 'china red';
  // });
  // console.log(currentState === nextState); // false
  // console.log(currentState.hobby === nextState.hobby); // false

  // 生成后不可以再修改
  // const nextState = produce(currentState, draft => {
  //   draft.hobby.color = 'china red';
  // });
  // nextState.name = 'chou'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
}
