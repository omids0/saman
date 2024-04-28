import { useMutation } from 'react-query'

import { updateTodo } from '../api/todos'

export const useUpdateTodo = () => {
  const { mutate, isLoading, error, isSuccess } = useMutation(updateTodo)

  return { mutate, isLoading, error, isSuccess }
}
