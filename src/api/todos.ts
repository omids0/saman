import axios from 'axios'

import { EndpointsEnum } from '../types/api/todos/endpoints'
import type {
  ICreateTodo,
  IDeleteTodo,
  IGetTodo,
  IUpdateTodos
} from '../types/api/todos/interfaces'

export const getTodos = async () => {
  const response = await axios.get(EndpointsEnum['TODOS'])

  return response.data
}

export const getTodo = async ({ id }: IGetTodo) => {
  const response = await axios.get(EndpointsEnum['TODOS'] + `/${id}`)

  return response.data
}

export const createTodo = async ({ title }: ICreateTodo) => {
  const response = await axios.post(EndpointsEnum['TODOS'], { title })

  return response.data
}

export const updateTodo = async ({ id, title }: IUpdateTodos) => {
  const response = await axios.put(EndpointsEnum['TODOS'] + `/${id}`, { title })

  return response.data
}

export const deleteTodo = async ({ id }: IDeleteTodo) => {
  await axios.delete(EndpointsEnum['TODOS'] + `/${id}`)
}
