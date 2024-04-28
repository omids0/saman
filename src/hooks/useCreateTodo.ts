import { useMutation } from 'react-query'

import { createTodo } from '../api/todos'

export const useCreateTodo = () => {
  const { mutate, isLoading, error, isSuccess } = useMutation(createTodo)

  return { mutate, isLoading, error, isSuccess }
}
