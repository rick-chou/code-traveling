import { LooseObj } from '@type/index'

const store = {
  state: {
    loading: false,
  },
  reducers: {
    toggleLoading(state: LooseObj) {
      return { ...state, loading: !state.loading }
    },
  },
  effects: (dispatch: LooseObj) => ({
    // demo
    async increment(payload: LooseObj, rootState: LooseObj) {
      let { num } = rootState.count
      num += payload
      dispatch.count.setNum(num)
    },
  }),
}

export default store
