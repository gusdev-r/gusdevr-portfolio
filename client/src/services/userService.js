import { api } from '../api/api'

export const userService = {
  async getAllUsers() {
    const response = api.get('all')
    return response
  },

  async findUser(userId) {
    const response = api.get(`users/${userId}`)
    return response
  },

  async updateUser(userId) {
    const response = api.put(`users/${userId}`)
    return response
  },

  async deleteUser(userId) {
    const response = api.put(`users/${userId}`)
    return response
  },

  async registerUser(userData) {
    api.post('public/register', userData)
  },
}
