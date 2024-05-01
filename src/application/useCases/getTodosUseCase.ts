import axios from 'axios'

import type { ITodoDataResponse } from '../entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getTodosUseCase = async () => {
  const response: { data: ITodoDataResponse[] | undefined } = await axios.get(baseUrl)

  return response.data
}
