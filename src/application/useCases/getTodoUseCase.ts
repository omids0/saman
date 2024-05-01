import axios from 'axios'

import type { IGetTodoParams, ITodoDataResponse } from '../entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getTodoUseCase = async ({ id }: IGetTodoParams) => {
  const response: { data: ITodoDataResponse | undefined } = await axios.get(`${baseUrl}/${id}`)

  return response.data
}
