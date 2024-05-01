import axios from 'axios'

import type { IUpdateTodosParams } from '../../domain/entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const updateTodo = async ({ id, title }: IUpdateTodosParams) => {
  const response = await axios.put(`${baseUrl}/${id}`, { title })

  return response.data
}
