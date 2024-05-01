import axios from 'axios'

import type { ICreateTodoParams } from '../../domain/entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const createTodo = async ({ title }: ICreateTodoParams) => {
  const response = await axios.post(baseUrl, { title })

  return response.data
}
