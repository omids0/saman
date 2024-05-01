import { useMutation } from 'react-query'

import { createTodo } from '../services/createTodo'

export const useCreateTodo = () => {
  const { mutate, isLoading, error } = useMutation(createTodo)

  return { mutate, isLoading, error }
}
