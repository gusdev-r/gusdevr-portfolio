import { UserDto } from '../dto/UserDto'
import { userService } from '../services/userService'

export const registerUser = async (data) => {
  const userData = new UserDto(data.username, data.email, data.password)
  userService.registerUser(userData)
}
