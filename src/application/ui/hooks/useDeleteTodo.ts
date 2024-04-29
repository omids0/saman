import { useMutation } from 'react-query'

import { deleteTodoUseCase } from '../../useCases/deleteTodoUseCase'

export const useDeleteTodo = () => {
  const { mutate, isLoading, error } = useMutation(deleteTodoUseCase)

  return { mutate, isLoading, error }
}
