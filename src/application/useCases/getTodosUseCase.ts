import axios from 'axios'

import { EndpointsEnum } from '../entities/endpoints'
import type { ITodoDataResponse } from '../entities/todo'

export const getTodosUseCase = async () => {
  const response: { data: ITodoDataResponse[] | undefined } = await axios.get(
    EndpointsEnum['TODOS']
  )

  return response.data
}
