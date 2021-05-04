import * as ACTIONS from './actionTypes'
import API from '@utils/api'
import { Dispatch } from 'redux'

export const getList = () => ({
  type: ACTIONS.GET_LIST,
})

export const setList = (list: Array<any>) => ({
  type: ACTIONS.SET_LIST,
  list,
})

export const getListSync = (list: Array<any>) => ({
  type: ACTIONS.GET_LIST_ASYNC,
  list,
})

export const getListAsync = () => {
  return async (dispatch: Dispatch) => {
    const { list } = await API.getList()
    dispatch(getListSync(list))
  }
}
