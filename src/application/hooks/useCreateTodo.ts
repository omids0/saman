import { useMutation } from 'react-query'

import { createTodo } from '../../infrastructure/services/createTodo'

export const useCreateTodo = () => {
  const { mutate, isLoading, error } = useMutation(createTodo)

  return { mutate, isLoading, error }
}
