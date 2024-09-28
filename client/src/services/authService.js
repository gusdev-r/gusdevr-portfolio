import { api } from '../api/api'

export const authService = {
  async authUser(authDto) {
    const response = api.post(authDto, '/public/user/auth')
    return response
  },
}
