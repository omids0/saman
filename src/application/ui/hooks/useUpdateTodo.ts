import { useMutation } from 'react-query'

import { updateTodoUseCase } from '../../useCases/updateTodoUseCase'

export const useUpdateTodo = () => {
  const { mutate, isLoading, error } = useMutation(updateTodoUseCase)

  return { mutate, isLoading, error }
}
