import axios from 'axios'

import type { IDeleteTodoParams } from '../entities/todo'

const baseUrl = process.env.REACT_APP_BASE_URL

export const deleteTodoUseCase = async ({ id }: IDeleteTodoParams) => {
  await axios.delete(`${baseUrl}/${id}`)
}
