import * as ACTIONS from './actionTypes'
import { IAction } from '@type/index'
const defaultState = {
  list: [],
}

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.GET_LIST:
      {

      }
  }
}
