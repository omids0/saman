import { useMutation } from 'react-query'

import { createTodoUseCase } from '../../useCases/createTodoUseCase'

export const useCreateTodo = () => {
  const { mutate, isLoading, error } = useMutation(createTodoUseCase)

  return { mutate, isLoading, error }
}
