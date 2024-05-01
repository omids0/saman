import axios from 'axios'

import type { IDeleteTodoParams } from '../../domain/entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const deleteTodo = async ({ id }: IDeleteTodoParams) => {
  await axios.delete(`${baseUrl}/${id}`)
}
