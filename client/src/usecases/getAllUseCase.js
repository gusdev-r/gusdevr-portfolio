import { userService } from '../../services/userService/'

export const getAllUseCase = async () => {
  try {
    const response = await userService.getAllUsers()
  } catch (error) {}
}
