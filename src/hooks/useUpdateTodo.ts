import { useMutation } from 'react-query'

import { updateTodo } from '../api/todos'

export const useUpdateTodo = () => {
  const { mutate, isLoading, error } = useMutation(updateTodo)

  return { mutate, isLoading, error }
}
