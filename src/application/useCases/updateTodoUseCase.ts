import axios from 'axios'

import { EndpointsEnum } from '../entities/endpoints'
import type { IUpdateTodosParams } from '../entities/todo'

export const updateTodoUseCase = async ({ id, title }: IUpdateTodosParams) => {
  const response = await axios.put(EndpointsEnum['TODOS'] + `/${id}`, { title })

  return response.data
}
