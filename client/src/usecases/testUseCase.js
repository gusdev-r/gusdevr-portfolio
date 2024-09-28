import { testService } from '../services/testService'

export const testUseCase = async () => {
  try {
    const response = await testService.testHello()
    return response
  } catch (error) {
    console.log('error at test:', error)
    throw error
  }
}
