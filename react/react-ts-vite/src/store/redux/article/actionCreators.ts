import * as ACTIONS from './actionTypes'

export const getList = () => ({
  type: ACTIONS.GET_LIST,
})

export const setList = (list: Array<number>) => ({
  type: ACTIONS.SET_LIST,
  list,
})
