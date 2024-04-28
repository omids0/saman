import { useMutation } from 'react-query'

import { deleteTodo } from '../api/todos'

export const useDeleteTodo = () => {
  const { mutate, isLoading, error, isSuccess } = useMutation(deleteTodo)

  return { mutate, isLoading, error, isSuccess }
}
