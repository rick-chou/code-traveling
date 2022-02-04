import http from './http'

const API = {
  getList: async () => {
    const url = '/list'
    const res = await http.get(url)
    return res.data
  },
}

export default API
