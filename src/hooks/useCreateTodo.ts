import { useMutation } from 'react-query'

import { createTodo } from '../api/todos'

export const useCreateTodo = () => {
  const { mutate, isLoading, error } = useMutation(createTodo)

  return { mutate, isLoading, error }
}
