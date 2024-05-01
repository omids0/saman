import { useQuery } from 'react-query'

import { getTodos } from '../../infrastructure/services/getTodos'

export const useGetTodos = () => {
  const { data, isLoading, error, refetch } = useQuery('todos', getTodos)

  return { data, isLoading, error, refetch }
}
