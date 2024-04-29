import axios from 'axios'

import { EndpointsEnum } from '../entities/endpoints'
import type { ICreateTodoParams } from '../entities/todo'

export const createTodoUseCase = async ({ title }: ICreateTodoParams) => {
  const response = await axios.post(EndpointsEnum['TODOS'], { title })

  return response.data
}
