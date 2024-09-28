import { UserDto } from '../dto/UserDto'
import { userService } from '../services/userService'

const execute = async (data) => {
  const userData = new UserDto(data.username, data.email, data.password)
  try {
    userService.registerUser(userData)
  } catch (error) {
    throw error
  }
}
export default execute
