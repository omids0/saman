import { useMutation } from 'react-query'

import { deleteTodo } from '../services/deleteTodo'

export const useDeleteTodo = () => {
  const { mutate, isLoading, error } = useMutation(deleteTodo)

  return { mutate, isLoading, error }
}
