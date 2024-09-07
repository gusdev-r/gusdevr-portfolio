import { api } from '../api/api'

export const testService = {
  async testHello() {
    const response = api.get('/public/test')
    return response
  },
}
