import axios from 'axios'

import { EndpointsEnum } from '../types/api/todos/endpoints'
import type {
  ICreateTodoParams,
  IDeleteTodoParams,
  IGetTodoParams,
  ITodoDataResponse,
  IUpdateTodosParams
} from '../types/api/todos/interfaces'

export const getTodos = async () => {
  const response: { data: ITodoDataResponse[] | undefined } = await axios.get(
    EndpointsEnum['TODOS']
  )

  return response.data
}

export const getTodo = async ({ id }: IGetTodoParams) => {
  const response: { data: ITodoDataResponse | undefined } = await axios.get(
    EndpointsEnum['TODOS'] + `/${id}`
  )

  return response.data
}

export const createTodo = async ({ title }: ICreateTodoParams) => {
  const response = await axios.post(EndpointsEnum['TODOS'], { title })

  return response.data
}

export const updateTodo = async ({ id, title }: IUpdateTodosParams) => {
  const response = await axios.put(EndpointsEnum['TODOS'] + `/${id}`, { title })

  return response.data
}

export const deleteTodo = async ({ id }: IDeleteTodoParams) => {
  await axios.delete(EndpointsEnum['TODOS'] + `/${id}`)
}
