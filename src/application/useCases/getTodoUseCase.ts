import axios from 'axios'

import { EndpointsEnum } from '../entities/endpoints'
import type { IGetTodoParams, ITodoDataResponse } from '../entities/todo'

export const getTodoUseCase = async ({ id }: IGetTodoParams) => {
  const response: { data: ITodoDataResponse | undefined } = await axios.get(
    EndpointsEnum['TODOS'] + `/${id}`
  )

  return response.data
}
