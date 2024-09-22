import { AuthDto } from '../dto/authDto'
import { authService } from '../services/authService'

export const authUserUseCase = async (email, password) => {
  const authDto = new AuthDto(email, password)
  try {
    const response = await authService.authUser(authDto)
    return response.data
  } catch (error) {}
}
