import { useMutation } from 'react-query'

import { updateTodo } from '../../infrastructure/services/updateTodo'

export const useUpdateTodo = () => {
  const { mutate, isLoading, error } = useMutation(updateTodo)

  return { mutate, isLoading, error }
}
