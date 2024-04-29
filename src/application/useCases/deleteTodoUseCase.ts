import axios from 'axios'

import { EndpointsEnum } from '../entities/endpoints'
import type { IDeleteTodoParams } from '../entities/todo'

export const deleteTodoUseCase = async ({ id }: IDeleteTodoParams) => {
  await axios.delete(EndpointsEnum['TODOS'] + `/${id}`)
}
